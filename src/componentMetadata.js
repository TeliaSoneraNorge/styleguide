import _ from 'lodash';

import componentMetadataHtml from '../component-metadata--html.json';
import componentMetadataReact from '../component-metadata--react.json';

export function getHtmlComponentMetadata() {
    return componentMetadataHtml;
}

export function getReactComponentsMetadata() {
    return componentMetadataReact;
}

export function getMergedMetadata() {
    return _.merge({}, componentMetadataHtml, componentMetadataReact);
}