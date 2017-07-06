import _ from 'lodash';
import marked from 'marked';
import pretty from 'pretty';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Tabs from 'react-simpletabs';

import * as ReactComponents from '../../components/index';
import CodeSnippet from './CodeSnippet';
import Heading from '../../components/atoms/Heading/Heading';

import { extractComponentNameFromPath } from '../utils/componentUtil';

function getMarkupStrings(componentWithProps) {
    return {
        html: pretty(ReactDOMServer.renderToStaticMarkup(componentWithProps)),
        jsx: reactElementToJSXString(componentWithProps, {
            showFunctions: false,
            functionValue: (fn) => `${fn.name}Fn`
        })
    };
}

const NoComponentFound = () =>
    <p>Component not found. It must be exported via the index.js file.</p>;

const ReactComponent = ({ path, metadata }) => {
    const ComponentToRender = ReactComponents.default[path] || NoComponentFound;
    const examples = metadata.examples || [];
    const componentName = extractComponentNameFromPath(path);
    return (
        <div className="sg-component" id={componentName}>
            <Heading level={2} children={componentName} />
            <div dangerouslySetInnerHTML={{ __html: marked(metadata.description) }}></div>
            {_.isEmpty(examples) ?
                <div className="sg-component__example" id={componentName}>
                    <div className="sg-component__example-rendered">
                        <p>No examples</p>
                    </div>
                </div> : null}
            {_.map(examples, (example, i) => {
                const componentWithProps = example.props.children ?
                    <ComponentToRender {...example.props}>
                        <div dangerouslySetInnerHTML={{ __html: example.props.children }} />
                    </ComponentToRender> :
                    <ComponentToRender {...example.props} />;

                const markupStrings = getMarkupStrings(componentWithProps);
                return (
                    <div key={i} className="sg-component__example">
                        <Heading level={3} children={example.name} />
                        <Tabs>
                            <Tabs.Panel title="Example">
                                <div className="inner-content">
                                    {componentWithProps}
                                </div>
                            </Tabs.Panel>
                            <Tabs.Panel title="HTML">
                                <CodeSnippet code={markupStrings.html} language="markup" />
                            </Tabs.Panel>
                            <Tabs.Panel title="JSX">
                                <CodeSnippet code={markupStrings.jsx} language="jsx" />
                            </Tabs.Panel>
                        </Tabs>
                    </div>
                );
            })}
        </div>
    );
};

export default ReactComponent;