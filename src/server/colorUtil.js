import _ from 'lodash';
import fs from 'fs';
import path from 'path';

export function getColorsFromFilePath(folderPath, fileName) {
    const fileContents = fs.readFileSync(path.join(folderPath, fileName), 'utf8');
    return getColorsFromFileContents(fileContents);
}

export function getColorsFromFileContents(fileContents) {
    const fileLines = fileContents.split('\n');
    const colorLines = _.filter(fileLines, (line) => {
        return _.startsWith(line.trim(), '--');
    });
    return _.map(colorLines, (colorLine) => {
        const colorLineParts = colorLine.trim().split(':');
        return {
            name: colorLineParts[0].replace(/--/g, '').replace(/-/g, ' '),
            variableName: colorLineParts[0],
            hexCode: colorLineParts[1].replace(/[\s;]/g, ''),
        };
    });
}