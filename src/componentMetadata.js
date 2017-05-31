import _ from 'lodash';

import componentMetadataHtml from '../component-metadata--html.json';
import componentMetadataReact from '../component-metadata--react.json';
import componentExamplesMetadataReact from '../component-metadata--react-examples.json';

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