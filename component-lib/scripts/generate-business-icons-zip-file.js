/* eslint-disable no-console */

const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

const fileName = 'telia-styleguide-business-icons.zip';
const outputPath = path.join(__dirname, '../dist-storybook/', fileName);
const output = fs.createWriteStream(outputPath);
const archive = archiver('zip');
const packageJson = require('../package.json');

output.on('close', () => {
  console.log(`${fileName} generated. Bytes: ${archive.pointer()}.`);
});

output.on('end', () => {
  console.log('Data has been drained');
});
archive.on('warning', err => {
  console.log('warning', err);
  throw err;
});
archive.on('error', err => {
  console.log('error', err);
  throw err;
});

archive.pipe(output);

const readme = `
Telia Styleguide

Follow the instructions on the Telia Styleguide for usage.

https://styleguide.channelapi.telia.no/


Storybook (component showcase):

https://styleguide.channelapi.telia.no/storybook/
`;

archive
  .append(packageJson.version, { name: 'version.txt' })
  .append(readme, { name: 'README.txt' })
  .glob('*.svg', { cwd: path.resolve(__dirname, '../assets/business-icons/') }, { prefix: 'icons/' })
  .finalize();
