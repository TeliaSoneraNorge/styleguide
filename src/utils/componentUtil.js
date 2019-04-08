import _ from 'lodash';

import { getComponentDocumentation } from './staticDataUtil';

function getComponentsByType(type, componentsInFolder) {
    const examples = require('../components/examples/**/*.js');

    return _.reduce(componentsInFolder, (result, value, componentName) => {
        if (!value[componentName]) {
            console.log('Skipping', type, componentName);
            return result;
        }

        const component = value[componentName].default;

        result[componentName] = {
            name: componentName,
            type: type,
            component,
            docs: getComponentDocumentation(type, componentName) || '*No documentation found*',
            examples: examples[type][componentName]
        };
        return result;
    }, {});
}

export function getComponents() {
    return {
        atoms: getComponentsByType('atoms', require('../../component-lib/src/atoms/**/*.jsx')),
        molecules: getComponentsByType('molecules', require('../../component-lib/src/molecules/**/*.jsx')),
        organisms: getComponentsByType('organisms', require('../../component-lib/src/organisms/**/*.jsx'))
    };
}

export function isFullWidthComponent(componentName) {
    const fullWidthComponents = [
        // Atoms
        'Container',
        'FullWidthImage',
        'PagePebbles',

        // Molecules
        'Alert',
        'ArticleMetaData',
        'BoxGrid',
        'FactBox',
        'FunkyTabs',
        'Header',
        'HeaderWithImage',
        'Hero',
        'PageHeader',
        'PageFooter',
        'PopUpLine',
        'RecommendedProducts',
        'RelatedArticles',
        'MiniDashboard',
        'Menu',
        'DisplayFunctionality',

        // Organisms
        'FocusSubscription',
        'ThemeBoxes',
        'ThemeBoxesWithImage',
        'ProductListGrid',
        'FeatureBoxes'
    ];
    return _.includes(fullWidthComponents, componentName);
}
