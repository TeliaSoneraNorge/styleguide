const allData = require('../static-data.json');

export function getStaticData(key) {
    return key ? allData[key] : allData;
}

const componentDocs = require('../component-docs.json');

export function getComponentDocumentation(type, name) {
    const match = findMatch(type, name);
    if (match && match.description) {
        return match.description.replace( /Category:\s\w*/gi, '');
    }
    return '';
}

export function getComponentCategory(type, name) {
    const match = findMatch(type, name);
    if (match && match.description) {
        const re = /Category:\s(?<category>\w*)/g;
        const res = re.exec(match.description);
        if (res) {
            return res.groups.category;
        }
    }
    return '';
}

const findMatch = (type, name) => {
    // Keys are like: "component-lib/src/organisms/ThemeBoxes/ThemeBoxes.jsx"
    let unixKey = `component-lib/src/${type}/${name}/${name}.jsx`;
    let match = componentDocs[unixKey];
    if (!match) {
        const windowsKey = unixKey.replace(/\//gi, '\\');
        match = componentDocs[windowsKey];
    }
    return match;
};
