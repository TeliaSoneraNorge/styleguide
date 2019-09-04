/* eslint-disable no-console */

const fs = require('fs');
const jsYml = require('js-yaml');
const path = require('path');
const SVGO = require('svgo');

async function run() {
    const svgoConfigFile = path.resolve(__dirname, '../svgo.config.yml');
    let svgoConfig;
    try {
        svgoConfig = jsYml.safeLoad(fs.readFileSync(svgoConfigFile, 'utf8'));
    } catch (error) {
        console.error('Error parsing SVGO config file: ' + svgoConfigFile);
        throw error;
    }
    const svgo = new SVGO(svgoConfig);

    const finalIconsFolder = path.resolve(__dirname, '../assets/icons');
    const newIconsFolder = path.resolve(finalIconsFolder, 'dropHereNewIcons');
    const iconFiles = fs.readdirSync(newIconsFolder).filter(f => f !== '.gitkeep');

    let result = { processed: [], errors: [] };
    for (const i in iconFiles) {
        const iconFileName = iconFiles[i];
        try {
            if (!iconFileName.match(/\.svg$/)) {
                throw new Error(`Only *.svg files allowed`);
            }
            const iconFileFullPath = path.resolve(newIconsFolder, iconFileName);
            const iconFileData = fs.readFileSync(iconFileFullPath);
            let svg;
            try {
                svg = await svgo.optimize(iconFileData, { path: iconFileName });
            } catch (error) {
                throw new Error(`Cannot process SVG content`);
            }
            if (!svg || !svg.data || svg.data.length === 0) {
                throw new Error(`No SVG content`);
            }
            fs.writeFileSync(
                path.resolve(finalIconsFolder, iconFileName.toLowerCase()),
                svg.data,
                { flag: 'wx' }
            );
            result.processed.push(iconFileName);
            fs.unlinkSync(iconFileFullPath);
        } catch (error) {
            result.errors.push(`${iconFileName}: ${error.message}`);
        }
    }
    console.log('addIcons script completed. Result:', result);
}

run();
