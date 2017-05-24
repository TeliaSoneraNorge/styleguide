import _ from 'lodash';
import encode from 'htmlencode';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Link } from 'react-router-dom';

import { getMergedDoc } from '../../../doc';
import * as Components from '../../components/index';

const doc = getMergedDoc();

const Component = ({ path, documentation }) => {
    //console.log("path", path, documentation);
    const ComponentToRender = Components.default[path];
    return (
        <div className="sg-component">
            <h2>{path}</h2>
            <p>{documentation.description}</p>
            {_.map(documentation.examplePropsList, (props, i) => {
                const htmlString = encode.htmlEncode(ReactDOMServer.renderToStaticMarkup(<ComponentToRender {...props} />));
                const jsxString = encode.htmlEncode(reactElementToJSXString(<ComponentToRender {...props} />, {
                    showFunctions: false,
                    functionValue: (fn) => `${fn.name}Fn`
                }));
                return (
                    <div key={i}>
                        <h3>Rendered component</h3>
                        <ComponentToRender {...props} />
                        <h3>HTML</h3>
                        <code dangerouslySetInnerHTML={{ __html: htmlString }}></code>
                        <h3>JSX</h3>
                        <code dangerouslySetInnerHTML={{ __html: jsxString }}></code>
                    </div>
                );
            })}
        </div>
    );
};

const ComponentsPage = () =>
    <div>
        <h1>Components</h1>
        {Object.keys(doc).map((path) =>
            <Component key={path} path={path} documentation={doc[path]} />)}
    </div>;

export default ComponentsPage;