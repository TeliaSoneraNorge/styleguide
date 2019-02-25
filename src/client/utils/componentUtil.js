import _ from 'lodash';
import * as reactDocs from 'react-docgen';
import { html } from 'js-beautify';

import ReactComponents from '../../../component-lib/src/examples-page';

const components = (() => {
    // First load paths of all React and Html examples.
    // NOTE: we cannot use variables in require.context
    const allReactExamplesPaths = require.context('!!raw-loader!../examples/', true, /(.*\.(js$))/).keys().map((path) => /^(.\/)?(.*)/.exec(path)[2]);
    
    // Now load paths of atoms, molecules and organisms
    const atomsPaths = require.context(`!!raw-loader!../../../component-lib/src/atoms`, true, /(.*\.(jsx|js|pcss)$)/).keys().map((path) => /^(.\/)?(\S*)/.exec(path)[2]); // remove ./ from relative path
    const moleculesPaths = require.context(`!!raw-loader!../../../component-lib/src/molecules`, true, /(.*\.(jsx|js|pcss)$)/).keys().map((path) => /^(.\/)?(\S*)/.exec(path)[2]); // remove ./ from relative path
    const organismsPaths = require.context(`!!raw-loader!../../../component-lib/src/organisms`, true, /(.*\.(jsx|js|pcss)$)/).keys().map((path) => /^(.\/)?(\S*)/.exec(path)[2]); // remove ./ from relative path

    const exportedComponents = ReactComponents;
    // Combine all those paths
    const componentsPaths = [
        ...atomsPaths.map(it => 'atoms/' + it),
        ...moleculesPaths.map(it => 'molecules/' + it),
        ...organismsPaths.map(it => 'organisms/' + it)
    ];

    const components = componentsPaths
    // Filter out .pcss paths if there is a React component + filter out React components, that are not exported by index
        .filter(path => !!exportedComponents.find(it => it === 'src/' + path))
        // Load the react component's code
        .map(it => {
            try {
                const [type, folder, fileName] = it.split('/');
                const [name] = fileName.split('.');
                return {
                    type,
                    folder,
                    name,
                    component: require(`!!raw-loader!../../../component-lib/src/${it}`),
                };
            } catch (e) {
                console.error(`Catch require("!!raw-loader!../../../component-lib/src/${it}")`);
                console.error(it);
                console.error(e);
                return null;
            }
        })
        // Filter out nulls
        .filter(it => it)
        // load and parse documentation
        .map(it => {
            const docs = reactDocs.parse(it.component);
            return {
                ...it,
                docs: docs,
                reactExamples: allReactExamplesPaths.filter(path => path.startsWith(`${it.type}/${it.folder}/`) && path.endsWith('.js')),
            };
        });
    return components;
})();

export function getComponents() {
    return components;
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
        'DisplayFunctionality',
        'Banner',
        'StatsDisplay',

        // Organisms
        'FocusSubscription',
        'ThemeBoxes',
        'ThemeBoxesWithImage',
        'ProductListGrid',
        'FeatureBoxes'
    ];
    return _.includes(fullWidthComponents, componentName);
}

export function beautifyHtml(staticMarkup) {
    // add new lines between almost all adjacent elements
    // moves inline elements to their own line
    const preFormattedHtml = staticMarkup.replace(/><(?!\/i|\/label|\/span|option)/g, '>\n<');

    /* eslint-disable camelcase */
    const beautifiedHtml = html(preFormattedHtml, {
        indent_size: 2,
        indent_char: ' ',
        wrap_attributes: 'auto',
        wrap_attributes_indent_size: 2,
        end_with_newline: false,
    });
    /* eslint-enable camelcase */
    return beautifiedHtml;
}

