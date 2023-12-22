const fs = require("fs").promises;
const { glob } = require("glob");
const path = require("path");

// Function to check if a directory exists
async function directoryExists(path) {
  try {
    const stat = await fs.stat(path);
    return stat.isDirectory();
  } catch (e) {
    return false;
  }
}

// Function to process file names
function getProcessedFileName(file, baseRepoPath) {
  // Remove the base repository path to make the file path relative
  const relativePath = path.relative(baseRepoPath, file);
  const dirs = relativePath.split(path.sep);
  const baseName = path.basename(file, path.extname(file));

  // Handle special cases for 'index', 'style', and '.d.ts' files
  if (
    baseName === "index" ||
    baseName === "style" ||
    path.extname(file) === ".d.ts"
  ) {
    if (dirs.length > 1) {
      const parentDir = dirs[dirs.length - 2];
      const grandparentDir = dirs.length > 2 ? dirs[dirs.length - 3] : "";
      if (parentDir === "styles" || parentDir === "components") {
        return `${grandparentDir}/${parentDir}/${baseName}`;
      }
      return `${parentDir}/${baseName}`;
    }
    return baseName;
  }

  // Return just the file name for regular files
  return path.basename(file);
}

const repoComponentCountMap = {};

async function findComponentsInRepo(repoPath, repoName) {
  const componentUsageMap = {};

  if (!(await directoryExists(repoPath))) {
    console.log(`Repository path not found: ${repoPath}`);
    return componentUsageMap;
  }

  try {
 
    const files = await glob(path.join(repoPath, '**/*.{js,ts,tsx,jsx}'),  { ignore: '**/node_modules/**' });
    
    for (const file of files) {
      if(file.includes("node_modules")) {
        // console.log("node_modules")
        continue;
      }
      try {
        
        const stat = await fs.stat(file);
        if (!stat.isFile()) {

          // console.log(file)
            continue; 
        }

        const fileContent = await fs.readFile(file, "utf-8");
        const regex =
          /import\s*{\s*([^}]+)\s*}\s*from\s*['"]@telia\/styleguide['"]/g;
        let match;
  
        while ((match = regex.exec(fileContent)) !== null) {
          const components = match[1]
            .split(",")
            .map((component) => component.trim().split(" ")[0]);
  
          components.forEach((component) => {
            if (!componentUsageMap[component]) {
              componentUsageMap[component] = {
                count: 0,
                files: [],
              };
            }
  
            componentUsageMap[component].count += 1;
            if (!componentUsageMap[component].files.includes(file)) {
              componentUsageMap[component].files.push(file);
            }
          });
        }
       
    } catch (readError) {
        console.error(`Error reading file ${file}:`, readError);
    }

    }
  } catch (error) {
    console.error(`Error in ${repoPath}:`, error);
  }

  // Update the count for the current repository
  repoComponentCountMap[repoName] = Object.keys(componentUsageMap).length;

  return componentUsageMap;
}

async function saveComponentUsageToCSV(componentUsageMap) {
  const outputPath = "combined_components_usage.csv";
  let csvContent = "Component,Count,Files\n";

  for (const [component, data] of Object.entries(componentUsageMap)) {
    const files = data.fileDetails.join("|");
    csvContent += `"${component}",${data.count},"${files}"\n`;
  }

  await fs.writeFile(outputPath, csvContent, "utf8");
  //console.log(`Component usage data saved to ${outputPath}`);
}
async function saveDataToCSV(filename, headers, dataRows) {
  const outputPath = filename;
  let csvContent = headers.join(",") + "\n";

  for (const row of dataRows) {
    csvContent += row.join(",") + "\n";
  }

  await fs.writeFile(outputPath, csvContent, "utf8");
  //console.log(`Data saved to ${outputPath}`);
}

async function parseExportedComponents(styleguidePath) {
  const indexPath = path.join(styleguidePath, "src/index.ts");
  const indexContent = await fs.readFile(indexPath, "utf-8");

  // Adjusted regular expression to capture exported names more reliably
  const exportRegex =
    /export\s+{([^}]+)}\s+from\s+['"][^'"]+['"];|export\s+(\w+)\s+from/g;
  const componentSet = new Set();

  let match;
  while ((match = exportRegex.exec(indexContent)) !== null) {
    // Match either the first group (for multiple exports) or the second group (for single exports)
    const componentsString = match[1] || match[2];

    if (componentsString) {
      const components = componentsString.split(",").map((c) => {
        const parts = c.trim().split(/\s+as\s+/);
        return parts[parts.length - 1]; // Take the alias name if 'as' is used, otherwise the original name
      });

      components.forEach((c) => componentSet.add(c));
    }
  }
  console.log(
    "Number of exported components in Telia Styleguide",
    componentSet.size
  );
  return componentSet;
}

async function processRepositoriesAndSaveToCSV() {
  const reposList = await fs.readFile("repos.txt", "utf-8");
  const repoUrls = reposList.split("\n").filter((line) => line);

  const combinedComponentUsageMap = {};

  for (const repoUrl of repoUrls) {
    const repoName = repoUrl.split("/").pop();
    const repoPath = path.resolve(__dirname, "../" + repoName);

    console.log(`Processing repository: ${repoName}`);
    const componentUsageMap = await findComponentsInRepo(repoPath, repoName);

    for (const [component, data] of Object.entries(componentUsageMap)) {
      if (!combinedComponentUsageMap[component]) {
        combinedComponentUsageMap[component] = { count: 0, fileDetails: [] };
      }

      const processedFiles = data.files.map((file) => {
        const processedFileName = getProcessedFileName(file, repoPath);
        return `${repoName}/${processedFileName}`;
      });

      combinedComponentUsageMap[component].count += data.count;
      combinedComponentUsageMap[component].fileDetails.push(...processedFiles);
    }
  }

  const styleguideRepoPath = path.resolve(__dirname, "../styleguide");
  const exportedComponents = await parseExportedComponents(styleguideRepoPath);

  const unusedComponents = new Set(
    [...exportedComponents].filter((x) => !combinedComponentUsageMap[x])
  );

  // Save used components information
  await saveComponentUsageToCSV(combinedComponentUsageMap);

  // Save the total count per repo to a separate file
  const repoCountRows = Object.entries(repoComponentCountMap).map(
    ([repo, count]) => [`"${repo}"`, count]
  );
  await saveDataToCSV(
    "repo_component_counts.csv",
    ["Repository", "Total Components"],
    repoCountRows
  );

  const repoCountRowsWithHeaders = repoCountRows.map((item) => ({
    Project: item[0],
    "Number of components": item[1],
  }));
  console.table(repoCountRowsWithHeaders);
  // Save unused components
  const unusedComponentsRows = [...unusedComponents].map((component) => [
    component,
  ]);
  await saveDataToCSV(
    "unused_components.csv",
    ["Component"],
    unusedComponentsRows
  );
  console.log("Number of unused components", unusedComponents.size);
}

processRepositoriesAndSaveToCSV();
