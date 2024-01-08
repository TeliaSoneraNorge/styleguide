const fs = require('fs').promises;
const path = require('path');
const csvFilePath = path.join(__dirname, 'combined_components_usage.csv');

async function getTopFiveComponents() {
    const content = await fs.readFile(csvFilePath, 'utf-8');
    const lines = content.split('\n').slice(1); // Skip header line

    const components = lines
        .filter(line => line) // Filter out empty lines
        .map(line => {
            const [name, count] = line.split(',').map(item => item.trim());
            return { name, count: parseInt(count, 10) };
        });

    // Sort by count in descending order and get the top five
    const topFiveComponents = components
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

    return topFiveComponents;
}

// Usage
getTopFiveComponents()
    .then(topFive => {
        console.log("Top Five Components:");
        topFive.forEach((component, index) => {
            console.log(`${index + 1}. ${component.name} - Count: ${component.count}`);
        });
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });