import _ from 'lodash';
import docComponents from './doc-components.json';
import docExamples from './doc-examples';

export function getDocComponents() {
    return docComponents;
}

export function getDocExamples() {
    return docExamples;
}

export function getMergedDoc() {
    return _.merge({}, docComponents, docExamples);
}