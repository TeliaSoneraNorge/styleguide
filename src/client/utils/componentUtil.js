import _ from 'lodash';
import * as reactDocs from 'react-docgen';
import { html } from 'js-beautify';

import ReactComponents from '../../../component-lib/src/index';

const components = (() => {
    // First load paths of all React and Html examples.
    // Btw. we cannot use variables in require.context
    const allReactExamplesPaths = require.context('!!raw-loader!../examples/', true, /(.*\.(js$))/).keys().map((path) => /^(.\/)?(.*)/.exec(path)[2]);
    const allHtmlExamplesPaths = require.context('!!raw-loader!../examples/', true, /(.*\.(html$))/).keys().map((path) => /^(.\/)?(.*)/.exec(path)[2]);
    // Now load paths of atoms, molecules and organisms
    const atomsPaths = require.context(`!!raw-loader!../../../component-lib/src/atoms`, true, /(.*\.(jsx|js|html|pcss)$)/).keys().map((path) => /^(.\/)?(\S*)/.exec(path)[2]); // remove ./ from relative path
    const moleculesPaths = require.context(`!!raw-loader!../../../component-lib/src/molecules`, true, /(.*\.(jsx|js|html|pcss)$)/).keys().map((path) => /^(.\/)?(\S*)/.exec(path)[2]); // remove ./ from relative path
    const organismsPaths = require.context(`!!raw-loader!../../../component-lib/src/organisms`, true, /(.*\.(jsx|js|html|pcss)$)/).keys().map((path) => /^(.\/)?(\S*)/.exec(path)[2]); // remove ./ from relative path
    const exportedComponents = ReactComponents;
    // Load all the markdown documentation
    const mdDocsPaths = require.context(`!!raw-loader!../../../component-lib/src`, true, /(.*\.(md$))/)
        .keys()
        .map((path) => /^(.\/)?(\S*)/.exec(path)[2]); // remove ./ from relative path
    // Combine all those paths
    const componentsPaths = [
        ...atomsPaths.map(it => 'atoms/' + it),
        ...moleculesPaths.map(it => 'molecules/' + it),
        ...organismsPaths.map(it => 'organisms/' + it)
    ];

    const components = componentsPaths
        // Filter out .pcss paths if there is a React component + filter out React components, that are not exported by index
        .filter(path => {
            const js = path.match(/(.*\.(jsx|js)$)/);
            if (js) {
                return !!exportedComponents.find(it => it === 'src/' + path);
            }
            const pcss = path.match(/(.*\.(pcss)$)/);
            if (pcss) {
                const componentName = /([\w\s\-]*)\.(pcss)$/.exec(path)[1];
                return !componentsPaths.find(it => it.match(new RegExp(componentName + '\.(jsx|js)$')));

            }
        })
        // Load the react component's code
        .map(it => {
            try {
                const [type, folder, fileName] = it.split('/');
                const [name] = fileName.split('.');
                const isHtmlOrCss = !!it.match(/(.*\.(html|pcss)$)/);
                return {
                    type,
                    folder,
                    name,
                    component: !isHtmlOrCss ? require(`!!raw-loader!../../../component-lib/src/${it}`) : null,
                    htmlOnly: isHtmlOrCss,
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
            const md = mdDocsPaths.find(md => md.endsWith(`${it.type}/${it.folder}/${it.name}.md`));
            const docs = it.htmlOnly
                ? { description: md ? require(`!!raw-loader!../../../component-lib/src/${md}`) : '' }
                : reactDocs.parse(it.component);
            return {
                ...it,
                docs: docs,
                reactExamples: allReactExamplesPaths.filter(path => path.startsWith(`${it.type}/${it.folder}/`) && path.endsWith('.js')),
                htmlExamples: allHtmlExamplesPaths.filter(path => path.startsWith(`${it.type}/${it.folder}/`) && path.endsWith('.html')),
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
        'NumberBoxes',
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
        'UserDashboard',

        // Organisms
        'FocusSubscription',
        'ThemeBoxes',
        'ThemeBoxesWithImage'
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

