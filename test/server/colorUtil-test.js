import chai from 'chai';

import { getColors } from '../../src/server/colorUtil';

const expect = chai.expect;

describe('colorUtil', () => {

    describe('getColors', () => {

        it('should the colors', () => {
            const colors = getColors();
            const colorNames = Object.keys(colors);
            expect(colorNames.length).to.be.greaterThan(3);
        });

    });

});