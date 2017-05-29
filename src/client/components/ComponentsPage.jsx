import _ from 'lodash';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { htmlEncode } from 'htmlencode';
import { Link } from 'react-router-dom';

import { getMergedMetadata } from '../../componentMetadata';
import * as ReactComponents from '../../components/index';

const componentMetadata = getMergedMetadata();

const StyleguideHtmlComponent = ({ path, metadata }) => {
    return (
        <div className="sg-component">
            <h2>{extractComponentNameFromPath(path)}</h2>
            <div dangerouslySetInnerHTML={{ __html: metadata.documentation }}></div>
            {_.map(metadata.examples, (example, i) =>
                <div key={i} className="sg-component__example">
                    <div className="sg-component__example-rendered">
                        <span className="sg-component__example-name">{example.name}</span>
                        <div dangerouslySetInnerHTML={{ __html: example.html }}></div>
                    </div>
                    <div className="sg-component__example-code">
                        <span className="sg-component__example-language">HTML</span>
                        <pre className="prettyprint"><code>{example.html}</code></pre>
                    </div>
                </div>
            )}
        </div>
    );
};

function getMarkupStrings(componentWithProps) {
    const htmlString = ReactDOMServer.renderToStaticMarkup(componentWithProps);
    const jsxString = reactElementToJSXString(componentWithProps, {
        showFunctions: false,
        functionValue: (fn) => `${fn.name}Fn`
    });
    return {
        html: htmlEncode(htmlString),
        jsx: htmlEncode(jsxString)
    };
}

function extractComponentNameFromPath(path) {
    const pathParts = path.split('/');
    const componentFileName = pathParts[pathParts.length - 1];
    return componentFileName.split('.')[0];
}

const StyleguideReactComponent = ({ path, metadata }) => {
    const ComponentToRender = ReactComponents.default[path];
    const exampleProps = ReactComponents.default[path + '/ReactExampleProps.js'] || [];
    return (
        <div className="sg-component">
            <h2>{extractComponentNameFromPath(path)}</h2>
            <p>{metadata.description}</p>
            {_.isEmpty(exampleProps) ?
                <div className="sg-component__example">
                    <div className="sg-component__example-rendered">
                        <p>No examples</p>
                    </div>
                </div> : null}
            {_.map(exampleProps, (props, i) => {
                const markupStrings = getMarkupStrings(<ComponentToRender {...props} />);
                return (
                    <div key={i} className="sg-component__example">
                        <div className="sg-component__example-rendered">
                            <ComponentToRender {...props} />
                        </div>
                        <div className="sg-component__example-code">
                            <span className="sg-component__example-language">HTML</span>
                            <pre className="prettyprint"><code dangerouslySetInnerHTML={{ __html: markupStrings.html }}></code></pre>
                        </div>
                        <div className="sg-component__example-code">
                            <span className="sg-component__example-language">JSX</span>
                            <pre className="prettyprint"><code dangerouslySetInnerHTML={{ __html: markupStrings.jsx }}></code></pre>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const Component = ({ path, metadata }) => {
    if (metadata.isHtmlComponent) {
        return <StyleguideHtmlComponent path={path} metadata={metadata} />;
    } else {
        return <StyleguideReactComponent path={path} metadata={metadata} />;
    }
};

const ComponentsPage = () =>
    <div>
        <h1>Components</h1>
        {Object.keys(componentMetadata).map((path) =>
            <Component key={path} path={path} metadata={componentMetadata[path]} />)}
    </div>;

export default ComponentsPage;