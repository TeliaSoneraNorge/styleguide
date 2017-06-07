import chai from 'chai';

import { getColorsFromFileContents } from '../../src/server/colorUtil';

const expect = chai.expect;

describe('colorUtil', () => {

    describe('getColorsFromFileContents', () => {

        it('should the colors', () => {
            const fileContents = `:root {
                --some-color: #990ae3;
                --some-other-color: #3CD9FF;
            }`;
            const colors = getColorsFromFileContents(fileContents);
            expect(colors).to.deep.equal([
                { name: 'some color', variableName: '--some-color', hexCode: '#990ae3' },
                { name: 'some other color', variableName: '--some-other-color', hexCode: '#3CD9FF' }
            ]);
        });

    });

});