import _ from 'lodash';
import React from 'react';
import Tabs from 'react-simpletabs';

import CodeSnippet from './CodeSnippet';
import Heading from '../../components/atoms/Heading/Heading';

import { extractComponentNameFromPath } from '../utils/componentUtil';

const HtmlComponent = ({ path, metadata }) => {
    const componentName = extractComponentNameFromPath(path);
    return (
        <div className="sg-component" id={componentName}>
            <Heading level={2} text={componentName} />
            <div dangerouslySetInnerHTML={{ __html: metadata.documentation }}></div>

            {_.map(metadata.examples, (example, i) =>
                <div key={i} className="sg-component__example">
                    <Heading level={3} text={example.name} />
                    <Tabs>
                        <Tabs.Panel title="Example">
                            <div className="inner-content" dangerouslySetInnerHTML={{ __html: example.html }}></div>
                        </Tabs.Panel>
                        <Tabs.Panel title="HTML">
                            <CodeSnippet code={example.html} language="markup" />
                        </Tabs.Panel>
                    </Tabs>
                </div>
            )}
        </div>
    );
};

export default HtmlComponent;