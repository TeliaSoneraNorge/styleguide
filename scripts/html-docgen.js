import _ from 'lodash';
import dir from 'node-dir';
import fs from 'fs';
import marked from 'marked';
import path from 'path';



function readComponentsFromDirectory(directoryPath) {
    const htmlComponents = {};
    const itemsInDirectory = fs.readdirSync(directoryPath);

    _.forEach(itemsInDirectory, (componentName) => {
        const componentDirectory = path.join(directoryPath, componentName);
        const htmlComponentPath = path.join(componentDirectory, `${componentName}.html`);
        if (!fs.existsSync(htmlComponentPath)) return;

        const documentationPath = path.join(componentDirectory, `${componentName}.md`);
        const documentation = fs.existsSync(documentationPath)
            ? marked(fs.readFileSync(documentationPath, 'utf8'))
            : `(No documentation found at ${componentName}.md)`;

        const htmlExamples = [{
            html: fs.readFileSync(htmlComponentPath, 'utf8'),
            name: componentName
        }];

        const itemsInComponentDirectory = fs.readdirSync(componentDirectory);
        _.forEach(itemsInComponentDirectory, (itemInComponentDirectory) => {
            if (!_.endsWith(itemInComponentDirectory, '.html')) return;
            if (itemInComponentDirectory === `${componentName}.html`) return;

            const exampleHtmlPath = path.join(componentDirectory, itemInComponentDirectory);
            htmlExamples.push({
                html: fs.readFileSync(exampleHtmlPath, 'utf8'),
                name: `${componentName} - ` + _.capitalize( itemInComponentDirectory.replace(/\.html/g, '').replace(componentName, '').replace('.', '').replace('-', ' ') )
            });
        });

        htmlComponents[htmlComponentPath] = {
            isHtmlComponent: true,
            documentation: documentation,
            examples: htmlExamples
        };
    });

    return htmlComponents;
}

const atoms = readComponentsFromDirectory('src/components/atoms');
const molecules = readComponentsFromDirectory('src/components/molecules');
const organisms = readComponentsFromDirectory('src/components/organisms');
const allHtmlComponents = Object.assign({}, atoms, molecules, organisms);

fs.writeFileSync('./component-metadata--html.json', JSON.stringify(allHtmlComponents, null, 2));
console.log('Generated component-metadata--html.json');
