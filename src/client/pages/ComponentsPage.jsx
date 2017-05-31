import _ from 'lodash';
import React from 'react';

import { getMergedMetadata } from '../../componentMetadata';
import Heading from '../../components/atoms/Heading/Heading';

import HtmlComponent from '../components/HtmlComponent';
import ReactComponent from '../components/ReactComponent';

const componentMetadata = getMergedMetadata();

const ComponentsPage = () =>
    <div className="content-wrapper">
        <Heading level={1} text="Components" />
        {Object.keys(componentMetadata).map((path) => {
            const metadata = componentMetadata[path];
            return (
                <div key={path}>
                    <p>{path}</p>
                    {metadata.isHtmlComponent
                        ? <HtmlComponent path={path} metadata={metadata} />
                        : <ReactComponent path={path} metadata={metadata} />}
                </div>
            );
        })}

    </div>;

export default ComponentsPage;