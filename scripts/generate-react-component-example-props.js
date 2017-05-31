import _ from 'lodash';
import dir from 'node-dir';
import fs from 'fs';
import marked from 'marked';
import path from 'path';

function readComponentsFromDirectory(directoryPath) {
    const exampleProps = {};
    const itemsInDirectory = fs.readdirSync(directoryPath);

    _.forEach(itemsInDirectory, (componentName) => {
        const componentDirectory = path.join(directoryPath, componentName);
        const examplePropsPath = path.join(componentDirectory, `${componentName}.jsx.Examples.json`);
        if (!fs.existsSync(examplePropsPath)) return;

        const componentPath = path.join(componentDirectory, `${componentName}.jsx`);
        const examplePropsJsonString = fs.readFileSync(examplePropsPath, 'utf8');
        exampleProps[componentPath] = {
            examples: JSON.parse(examplePropsJsonString)
        };
    });

    return exampleProps;
}

const atoms = readComponentsFromDirectory('src/components/atoms');
const molecules = readComponentsFromDirectory('src/components/molecules');
const organisms = readComponentsFromDirectory('src/components/organisms');
const allExampleProps = Object.assign({}, atoms, molecules, organisms);

fs.writeFileSync('./component-metadata--react-examples.json', JSON.stringify(allExampleProps, null, 2));
console.log('Generated component-metadata--react-examples.json');
