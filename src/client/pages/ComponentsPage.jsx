import React from 'react';

import Heading from '../../components/atoms/Heading/Heading';
import { getMergedMetadata } from '../../componentMetadata';

import HtmlComponent from '../components/HtmlComponent';
import ReactComponent from '../components/ReactComponent';

const componentMetadata = getMergedMetadata();

const ComponentsPage = () =>
    <div className="content-wrapper">
        <Heading level={1} text="Components" />
        {Object.keys(componentMetadata).map((path) => {
            const metadata = componentMetadata[path];
            return metadata.isHtmlComponent
                ? <HtmlComponent key={path} path={path} metadata={metadata} />
                : <ReactComponent key={path} path={path} metadata={metadata} />;
        })}
    </div>;

export default ComponentsPage;