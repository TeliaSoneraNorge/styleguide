const fs = require('fs').promises;
const path = require('path');
const csvFilePath = path.join(__dirname, 'combined_components_usage.csv');

async function findUniqueComponentsPerRepo() {
    const content = await fs.readFile(csvFilePath, 'utf-8');
    const lines = content.split('\n').slice(1); // Skip header line

    const repoUniqueComponents = {};

    for (const line of lines) {
        if (!line) continue; // Skip empty lines

        const [component, , files] = line.split(',').map(item => item.trim().replace(/"/g, ''));
        const fileRepos = files.split('|').map(file => file.split('/')[0]);

        const uniqueRepos = new Set(fileRepos);

        if (uniqueRepos.size === 1) {
            // Component is unique to a single repository
            const repo = uniqueRepos.values().next().value;
            if (!repoUniqueComponents[repo]) {
                repoUniqueComponents[repo] = new Set();
            }
            repoUniqueComponents[repo].add(component);
        }
    }

    // Convert Sets to Arrays and count the number of unique components
    const repoUniqueComponentsCount = {};
    for (const repo in repoUniqueComponents) {
        repoUniqueComponentsCount[repo] = {
            components: Array.from(repoUniqueComponents[repo]),
            count: repoUniqueComponents[repo].size
        };
    }

    return repoUniqueComponentsCount;
}


findUniqueComponentsPerRepo()
    .then(repoUniqueComponentsCount => {
        console.log("Unique Components per Repository:");
        console.log(repoUniqueComponentsCount);
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });
