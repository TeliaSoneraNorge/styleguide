import _ from 'lodash';

export function extractComponentNameFromPath(path) {
    const pathParts = path.split('/');
    const componentFileName = pathParts[pathParts.length - 1];
    return componentFileName.split('.')[0];
}

export function groupComponentMetadataByType(componentMetadata) {
    const groupedMetadata = {
        atoms: {},
        molecules: {},
        organisms: {}
    };

    _.forEach(componentMetadata, (metadata, path) => {
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
        'FactBoxes',
        'FullWidthImage',

        // Molecules
        'BottomComponent',
        'FunkyTabs',
        'Header',
        'PageHeader',
        'PageFooter'
    ];
    return _.includes(fullWidthComponents, componentName);
}
