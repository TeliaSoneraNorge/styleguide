const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

const fileName = 'TeliaStyleguide-Latest.zip';
const outputPath = path.join(__dirname, '../dist/public/', fileName);
const output = fs.createWriteStream(outputPath);
const archive = archiver('zip');

output.on('close', () => {
    console.log(`${fileName} generated. Bytes: ${archive.pointer()}.`);
});

output.on('end', () => {
    console.log('Data has been drained');
});
archive.on('warning', (err) => {
    console.log('warning', err);
    throw err;
});
archive.on('error', (err) => {
    console.log('error', err);
    throw err;
});

archive.pipe(output);

const css = fs.readFileSync('./dist/public/css/bundle.components.css', 'utf8').replace(/\/public\//g, '');
const packageJson = require('../package.json');

archive
    .append(packageJson.version, { name: 'version.txt' })
    .append('Follow the instuctions on the Telia Styleguide for usage.', { name: 'README.txt' })
    .append(css, { name: 'telia-styleguide.css' })
    .directory('./dist/public/fonts/', 'fonts')
    .directory('./dist/public/allicons/', 'allicons')
    .directory('./dist/public/icons/', 'icons')
    .directory('./dist/public/pebbles/', 'pebbles')
    .finalize();
