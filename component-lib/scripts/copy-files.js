/* eslint-disable no-console */

const path = require('path');
const fse = require('fs-extra');

async function copyFolder(folder) {
    const buildPath = path.resolve(__dirname, '../dist/', path.basename(folder));
    await fse.copy(folder, buildPath);
    console.log(`Copied ${folder} to ${buildPath}`);
}

async function copyFile(file) {
    const buildPath = path.resolve(__dirname, '../dist/', path.basename(file));
    await fse.copy(file, buildPath);
    console.log(`Copied ${file} to ${buildPath}`);
}

async function createPackageFile() {
    const packageData = await fse.readFile(path.resolve(__dirname, '../package.json'), 'utf8');
    const { nyc, scripts, devDependencies, workspaces, ...packageDataOther } = JSON.parse(packageData);
    const newPackageData = {
        ...packageDataOther,
        main: './index.js',
        module: './index.js',
        private: false
    };
    const buildPath = path.resolve(__dirname, '../dist/package.json');

    await fse.writeFile(buildPath, JSON.stringify(newPackageData, null, 2), 'utf8');
    console.log(`Created package.json in ${buildPath}`);

    return newPackageData;
}

async function prepend(file, string) {
    const data = await fse.readFile(file, 'utf8');
    await fse.writeFile(file, string + data, 'utf8');
}

async function addLicense(packageData) {
    const license = `/** @license Telia Style Guide v${packageData.version}
 *
 * This source code is licensed under the ISC license found in the
 * LICENSE file in the root directory of this source tree.
 */
`;

    await prepend(path.resolve(__dirname, '../dist/index.js'), license);
}

async function run() {
    await Promise.all(
        ['../README.md', '../VERSIONS.md', '../LICENSE'].map(file => copyFile(file)),
        ['./assets'].map(folder => copyFolder(folder))
    );
    const packageData = await createPackageFile();
    await addLicense(packageData);
}

run();
