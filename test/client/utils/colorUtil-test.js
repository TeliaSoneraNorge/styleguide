import * as colorUtil from '../../../src/client/utils/colorUtil';

describe('colorUtil', () => {

    const colors = {
        "Black": { "hex": "#000000", "textColor": "#FFFFFF" },
        "White": { "hex": "#FFFFFF", "textColor": "#000000" },
        "Grey": { "hex": "#F2F2F2", "textColor": "#000000" },

        "Core Purple": { "hex": "#990AE3", "textColor": "#FFFFFF" },
        "Dark Core Purple": { "hex": "#9B009B", "textColor": "#FFFFFF" },
        "Light Core Purple": { "hex": "#CC00FF", "textColor": "#000000" }
    };

    describe('fromColorsToCssVariables', () => {

        it('should return an empty variable set when no colors are passed in', () => {
            const result = colorUtil.fromColorsToCssVariables({});
            expect(result).to.equal(`:root {\n}`);
        });

        it('should return some variables when colors are passed in', () => {
            const result = colorUtil.fromColorsToCssVariables(colors);
            expect(result).to.equal(':root {\n' +
                '    --black: #000000;\n' +
                '    --white: #FFFFFF;\n' +
                '    --grey: #F2F2F2;\n' +
                '\n' +
                '    --core-purple: #990AE3;\n' +
                '    --dark-core-purple: #9B009B;\n' +
                '    --light-core-purple: #CC00FF;\n' +
            '}');
        });

    });

    describe('fromColorsToLessVariables', () => {

        it('should return an empty variable set when no colors are passed in', () => {
            const result = colorUtil.fromColorsToLessVariables({});
            expect(result).to.equal(``);
        });

        it('should return some variables when colors are passed in', () => {
            const result = colorUtil.fromColorsToLessVariables(colors);
            expect(result).to.equal(
                '@black: #000000;\n' +
                '@white: #FFFFFF;\n' +
                '@grey: #F2F2F2;\n' +
                '\n' +
                '@core-purple: #990AE3;\n' +
                '@dark-core-purple: #9B009B;\n' +
                '@light-core-purple: #CC00FF;');
        });

    });

    describe('fromColorsToSassVariables', () => {

        it('should return an empty variable set when no colors are passed in', () => {
            const result = colorUtil.fromColorsToSassVariables({});
            expect(result).to.equal(``);
        });

        it('should return some variables when colors are passed in', () => {
            const result = colorUtil.fromColorsToSassVariables(colors);
            expect(result).to.equal(
                '$black: #000000;\n' +
                '$white: #FFFFFF;\n' +
                '$grey: #F2F2F2;\n' +
                '\n' +
                '$core-purple: #990AE3;\n' +
                '$dark-core-purple: #9B009B;\n' +
                '$light-core-purple: #CC00FF;');
        });

    });

});