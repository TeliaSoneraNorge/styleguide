import _ from 'lodash';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Tabs from 'react-simpletabs';
import pretty from 'pretty';

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
                        <Heading level={3} text={example.name} />
                        <Tabs>
                            <Tabs.Panel title="Example">
                                <div className="inner-content">
                                    <ComponentToRender {...example.props} />
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