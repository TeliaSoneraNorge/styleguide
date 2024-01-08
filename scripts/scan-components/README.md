# Component Usage Analysis Tool

This tool is designed to analyze the usage of components from the `@telia/styleguide` across multiple repositories. It identifies both the usage of these components and any unused components within the styleguide.

## Description

The script scans a list of repositories for component usage, compiles a report on which components are used and where, and checks against the styleguide to identify any components that are not in use.

## Prerequisites

Before running this script, ensure the following requirements are met:
- Node.js is installed on your machine.
- You have a list of repositories to analyze in a file named `repos.txt`.
- Each repository is accessible and cloned to your local machine.
- The `@telia/styleguide` repository is cloned to your local machine.

## How to Run the Script

1. **Prepare `repos.txt` File:**
   - This file should contain the URLs of the repositories you want to analyze, each on a new line.

2. **Run the Script:**
   - Execute the script using Node.js:
     ```bash
     node scanComponents.js
     ```

## Output Files

- **`combined_components_usage.csv`**: Contains information about where each component from the styleguide is used across the repositories.
- **`repo_component_counts.csv`**: Shows the total number of unique components used in each repository.
- **`unused_components.csv`**: Lists the components from the styleguide that are not used in any of the analyzed repositories.

## Assumptions Made by the Script

- The script assumes that all relevant source files are in TypeScript or JavaScript format (`.ts`, `.tsx`, `.js`, `.jsx`).
- It skips any files located within `node_modules` directories.
- The script expects that the `styleguide` repository contains an `index.ts` file at `src/index.ts`, which exports all the components.


## `findUniqueComponentsPerRepo.js`

This script is designed to analyze the `combined_components_usage.csv` file generated by the `scanComponents.js` script. It identifies components that are uniquely used in each repository.

### How to Run:

Execute the script using Node.js:

```bash 
node findUniqueComponentsPerRepo.js
```

### `getTopFiveComponents.js`

This script processes the `combined_components_usage.csv` file to identify the top five most-used components from the `@telia/styleguide`.

**How to Run:**

```bash
node getTopFiveComponents.js
```