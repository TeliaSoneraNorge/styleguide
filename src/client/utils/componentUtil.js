import _ from 'lodash';

export function extractComponentNameFromPath(path) {
    const pathParts = path.split('/');
    const componentFileName = pathParts[pathParts.length - 1];
    return componentFileName.split('.')[0];
}

export function extractComponentNameFromFolder(path) {
    const pathParts = path.split('/');
    return pathParts[pathParts.length - 2];
}

export function groupComponentMetadataByType(componentMetadata) {
    const groupedMetadata = {
        atoms: {},
        molecules: {},
        organisms: {}
    };

    _.forEach(componentMetadata, (metadata, path) => {
        const componentName = extractComponentNameFromPath(path);
        const folderName = extractComponentNameFromFolder(path);

        if (componentName !== folderName) {
            return;
        }

        if (_.includes(path, 'atoms')) {
            groupedMetadata.atoms[path] = metadata;
        } else if (_.includes(path, 'molecules')) {
            groupedMetadata.molecules[path] = metadata;
        } else if (_.includes(path, 'organisms')) {
            groupedMetadata.organisms[path] = metadata;
        }
    });

    return groupedMetadata;
}

export function isFullWidthComponent(componentName) {
    const fullWidthComponents = [
        // Atoms
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
        'Hero',
        'PageHeader',
        'PageFooter',
        'RelatedArticles',
        'UserDashboard',
        'PopUpLine',

        // Organisms
        'FocusSubscription'
    ];
    return _.includes(fullWidthComponents, componentName);
}
