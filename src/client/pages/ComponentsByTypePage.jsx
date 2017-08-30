import _ from 'lodash';
import React from 'react';

import Heading from '../../components/atoms/Heading/Heading';

import HtmlComponent from '../components/HtmlComponent';
import ReactComponent from '../components/ReactComponent';

import { getMergedMetadata } from '../../componentMetadata';
import { groupComponentMetadataByType } from '../utils/componentUtil';

const componentMetadata = getMergedMetadata();

const ComponentsPage = (props) => {
    const componentType = props.match.params.componentType;
    const groupedComponentMetadata = groupComponentMetadataByType(componentMetadata);
    const relevantComponentMetadata = groupedComponentMetadata[componentType];
    const componentPaths = _.chain(relevantComponentMetadata).keys().sortBy().value();

    return (
        <div className="sg-components content-wrapper">
            <Heading level={1} text={`Components: ${componentType}`} />

            {_.map(componentPaths, (path) => {
                const metadata = componentMetadata[path];
                return metadata.isHtmlComponent
                    ? <HtmlComponent key={path} path={path} metadata={metadata} />
                    : <ReactComponent key={path} path={path} metadata={metadata} />;
            })}
        </div>
    );
}

export default ComponentsPage;