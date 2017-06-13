import _ from 'lodash';

export function fromColorsToCssVariables(colors) {
    let cssString = ':root {';

    let counter = 0;
    _.forEach(colors, (color, name) => {
        const variableName = name.toLowerCase().replace(/\s/g, '-');
        cssString += `\n    --${variableName}: ${color.hex};`

        counter++;
        if (counter === 3) {
            cssString += `\n`;
            counter = 0;
        }
    });

    if (!_.endsWith(cssString, '\n')) {
        cssString += '\n';
    }

    return cssString + '}';
}


function fromColorsToSassLikeVariables(colors, variablePrefix = '$') {
    let cssString = '';

    let counter = 0;
    _.forEach(colors, (color, name) => {
        const variableName = name.toLowerCase().replace(/\s/g, '-');
        cssString += `${variablePrefix}${variableName}: ${color.hex};\n`

        counter++;
        if (counter === 3) {
            cssString += `\n`;
            counter = 0;
        }
    });

    while (_.endsWith(cssString, '\n')) {
        cssString = cssString.substr(0, cssString.length - 1);
    }

    return cssString;
}

export function fromColorsToLessVariables(colors) {
    return fromColorsToSassLikeVariables(colors, '@');
}

export function fromColorsToSassVariables(colors) {
    return fromColorsToSassLikeVariables(colors, '$');
}