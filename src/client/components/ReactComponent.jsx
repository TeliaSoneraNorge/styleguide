import _ from 'lodash';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { htmlEncode } from 'htmlencode';
import pretty from 'pretty';

import * as ReactComponents from '../../components/index';
import Heading from '../../components/atoms/Heading/Heading';

import { extractComponentNameFromPath } from '../utils/componentUtil';

function getMarkupStrings(componentWithProps) {
    const htmlString = pretty(ReactDOMServer.renderToStaticMarkup(componentWithProps));
    const jsxString = reactElementToJSXString(componentWithProps, {
        showFunctions: false,
        functionValue: (fn) => `${fn.name}Fn`
    });
    return {
        html: htmlEncode(htmlString),
        jsx: htmlEncode(jsxString)
    };
}

const ReactComponent = ({ path, metadata }) => {
    const ComponentToRender = ReactComponents.default[path];
    const examples = metadata.examples || [];
    return (
        <div className="sg-component">
            <Heading level={2} text={extractComponentNameFromPath(path)} />
            <p>{metadata.description}</p>
            {_.isEmpty(examples) ?
                <div className="sg-component__example">
                    <div className="sg-component__example-rendered">
                        <p>No examples</p>
                    </div>
                </div> : null}
            {_.map(examples, (example, i) => {
                const markupStrings = getMarkupStrings(<ComponentToRender {...example.props} />);
                return (
                    <div key={i} className="sg-component__example">
                        <div className="sg-component__example-rendered">
                            <ComponentToRender {...example.props} />
                        </div>
                        <div className="sg-component__example-code">
                            <span className="sg-component__example-language">HTML</span>
                            <pre><code className="language-markup" dangerouslySetInnerHTML={{ __html: markupStrings.html }}></code></pre>
                        </div>
                        <div className="sg-component__example-code">
                            <span className="sg-component__example-language">JSX</span>
                            <pre><code className="language-jsx" dangerouslySetInnerHTML={{ __html: markupStrings.jsx }}></code></pre>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ReactComponent;