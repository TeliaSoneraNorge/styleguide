import _ from 'lodash';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Heading from '../../components/atoms/Heading/Heading';

import { extractComponentNameFromPath } from '../utils/componentUtil';

const HtmlComponent = ({ path, metadata }) => {
    return (
        <div className="sg-component">
            <Heading level={2} text={extractComponentNameFromPath(path)} />
            <div dangerouslySetInnerHTML={{ __html: metadata.documentation }}></div>
            {_.map(metadata.examples, (example, i) =>
                <div key={i} className="sg-component__example">
                    <Heading level={3} text={example.name} />
                    <div className="sg-component__example-rendered">
                        <div dangerouslySetInnerHTML={{ __html: example.html }}></div>
                    </div>
                    <div className="sg-component__example-code">
                        <span className="sg-component__example-language">HTML</span>
                        <pre><code className="language-markup">{example.html}</code></pre>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HtmlComponent;