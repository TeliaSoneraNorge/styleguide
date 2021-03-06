/* eslint-disable no-console */

const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

const fileName = 'TeliaStyleguide-Latest.zip';
const outputPath = path.join(__dirname, '../dist-storybook', fileName);
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

const css = fs.readFileSync(path.resolve(__dirname, '../dist/index.css'), 'utf8').replace(/\.\/assets\//g, '');
const componentsCss = fs
  .readFileSync(path.resolve(__dirname, '../dist/components.css'), 'utf8')
  .replace(/\.\/assets\//g, '');
const packageJson = require('../package.json');

archive
  .append(packageJson.version, { name: 'version.txt' })
  .append('Follow the instuctions on the Telia Styleguide for usage.', { name: 'README.txt' })
  .append(css, { name: 'telia-styleguide.css' })
  .append(componentsCss, { name: 'telia-styleguide-components-only.css' })
  .directory(path.resolve(__dirname, '../assets/fonts/'), 'fonts')
  .directory(path.resolve(__dirname, '../assets/allicons/'), 'allicons')
  .glob('icons-legacy/*.*', { cwd: path.resolve(__dirname, '../assets') })
  .directory(path.resolve(__dirname, '../assets/pebbles/'), 'pebbles')
  .finalize();
