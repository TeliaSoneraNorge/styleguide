/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const processIcons = require('./lib/process-icons');
const archiver = require('archiver');

const packageJson = require('../package.json');

async function run() {
  const icons = await processIcons();

  const fileName = 'telia-styleguide-icons.zip';
  const outputDir = path.join(__dirname, '../dist-storybook');
  const outputPath = path.join(outputDir, fileName);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const output = fs.createWriteStream(outputPath);
  const archive = archiver('zip');

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
  `;

  archive.append(packageJson.version, { name: 'version.txt' });
  archive.append(readme, { name: 'README.txt' });

  icons.forEach(ico => {
    archive.append(ico.svg, { name: `icons/${ico.icon}.svg` });
  });

  archive.finalize();
}

run();
