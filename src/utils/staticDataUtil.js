const allData = require('../static-data.json');

export function getStaticData(key) {    
    return key ? allData[key] : allData;
}

const componentDocs = require('../component-docs.json');

export function getComponentDocumentation(type, name) {    
    // Keys are like: "component-lib/src/organisms/ThemeBoxes/ThemeBoxes.jsx"
    const possibleKey = `component-lib/src/${type}/${name}/${name}.jsx`;
    const match = componentDocs[possibleKey];
    
    if (match && match.description) {
        return match.description;
    }
    return '';
}
