import _ from 'lodash';
import React from 'react';

import Header from '../../components/molecules/Header/Header';

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
        <div>
            <Header
                iconUrl="/public/ico_code.svg"
                pageTitle={`Components: ${componentType}`}
                withMask={false}
                withContentOverlap={false} />
            <div className="container container--no-padding">
                {_.map(componentPaths, (path) => {
                    const metadata = componentMetadata[path];
                    return metadata.isHtmlComponent
                        ? <HtmlComponent key={path} path={path} metadata={metadata} />
                        : <ReactComponent key={path} path={path} metadata={metadata} />;
                })}
            </div>
        </div>
    );
}

export default ComponentsPage;