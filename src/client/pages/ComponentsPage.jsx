import React from 'react';

import Heading from '../../components/atoms/Heading/Heading';

import HtmlComponent from '../components/HtmlComponent';
import ReactComponent from '../components/ReactComponent';

import { getMergedMetadata } from '../../componentMetadata';
import { extractComponentNameFromPath, groupComponentMetadataByType } from '../utils/componentUtil';

const componentMetadata = getMergedMetadata();

const ComponentList = ({ groupName, groupedComponentMetadata }) => {
    const componentPaths = _.chain(groupedComponentMetadata[groupName]).keys().sortBy().value();
    return (
        <ul>
            {_.map(componentPaths, (path) => {
                const componentName = extractComponentNameFromPath(path);
                return <li><a href={`/components/${groupName}#${componentName}`}>{componentName}</a></li>;
            })}
        </ul>
    );
}

const ComponentsPage = (props) => {
    const groupedComponentMetadata = groupComponentMetadataByType(componentMetadata);
    return (
        <div className="sg-components content-wrapper">
            <Heading level={1} children="Components" />
            <ul>
                <li>
                    <a href="/components/atoms">Atoms</a>
                    <ComponentList groupName="atoms" groupedComponentMetadata={groupedComponentMetadata} />
                </li>
                <li>
                    <a href="/components/molecules">Molecules</a>
                    <ComponentList groupName="molecules" groupedComponentMetadata={groupedComponentMetadata} />
                </li>
                <li>
                    <a href="/components/organisms">Organisms</a>
                    <ComponentList groupName="organisms" groupedComponentMetadata={groupedComponentMetadata} />
                </li>
            </ul>
        </div>
    );
}

export default ComponentsPage;