import _ from 'lodash';
import React from 'react';

import CodeSnippet from './CodeSnippet';
import { Heading } from '../../../component-lib/src/index';

import { extractComponentNameFromPath, isFullWidthComponent } from '../utils/componentUtil';

const HtmlComponent = ({ path, metadata }) => {
    const componentName = extractComponentNameFromPath(path);
    return (
        <div id={componentName} className="sg-component">
            <div className="container container--medium container--no-margin">
                <Heading level={2} text={componentName} />
                <div dangerouslySetInnerHTML={{ __html: metadata.documentation }}></div>
            </div>
            {isFullWidthComponent(componentName) ?
                _.map(metadata.examples, (example, i) =>
                    <div key={i}>
                        <div className="container container--medium container--no-margin">
                            <Heading level={3} text={example.name} />
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: example.html }}></div>
                        <div className="container container--medium container--no-margin">
                            <CodeSnippet code={example.html} language="markup" />
                        </div>
                    </div>
                ) :
                _.map(metadata.examples, (example, i) =>
                    <div key={i} className="container container--medium container--no-margin">
                        <Heading level={3} text={example.name} />
                        <div className="sg-margin-top" dangerouslySetInnerHTML={{ __html: example.html }}></div>
                        <CodeSnippet code={example.html} language="markup" />
                    </div>
                )}
        </div>
    );
};

export default HtmlComponent;