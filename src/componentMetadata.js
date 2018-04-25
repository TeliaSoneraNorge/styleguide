import _ from 'lodash';

import componentMetadataHtmlRaw from './component-metadata--html.json';
import componentMetadataReactRaw from './component-metadata--react.json';
import componentExamplesMetadataReactRaw from './component-metadata--react-examples.json';

function fix(metadata) {
    const fixedMetadata = {};
    Object.keys(metadata).forEach((key) => {
        fixedMetadata[key.replace(/\\/gi, '/')] = metadata[key];
    });
    return fixedMetadata;
}

const componentMetadataHtml = fix(componentMetadataHtmlRaw);
const componentMetadataReact = fix(componentMetadataReactRaw);
const componentExamplesMetadataReact = fix(componentExamplesMetadataReactRaw);

export function getHtmlComponentMetadata() {
    return componentMetadataHtml;
}

export function getReactComponentsMetadata() {
    return componentMetadataReact;
}

export function getReactComponentExamplesMetadata() {
    return componentExamplesMetadataReact;
}

export function getMergedMetadata() {
    return _.merge({}, componentMetadataHtml, componentMetadataReact, componentExamplesMetadataReact);
}