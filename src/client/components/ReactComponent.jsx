import _ from 'lodash';
import marked from 'marked';
import pretty from 'pretty';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Tabs from 'react-simpletabs';

import * as ReactComponents from '../../components/index';
import CodeSnippet from './CodeSnippet';
import Heading from '../../components/atoms/Heading/Heading';

import { extractComponentNameFromPath } from '../utils/componentUtil';

const NoComponentFound = () =>
    <p>Component not found. It must be exported via the src/components/index.js file.</p>;

const ReactComponent = ({ path, metadata }) => {
    const ComponentToRender = ReactComponents.default[path] || NoComponentFound;
    const examples = metadata.examples || [];
    const componentName = extractComponentNameFromPath(path);
    return (
        <div className="sg-component" id={componentName}>
            <Heading level={2} text={componentName} />
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

                const markupString = pretty(ReactDOMServer.renderToStaticMarkup(componentWithProps));
                return (
                    <div key={i} className="sg-component__example">
                        <Heading level={3} text={example.name} />
                        <Tabs>
                            <Tabs.Panel title="Example">
                                <div className={`inner-content ${example.containerCssClass || ''}`}>
                                    {componentWithProps}
                                </div>
                            </Tabs.Panel>
                            <Tabs.Panel title="HTML">
                                <CodeSnippet code={markupString} language="markup" />
                            </Tabs.Panel>
                        </Tabs>
                    </div>
                );
            })}
        </div>
    );
};

export default ReactComponent;