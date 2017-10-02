import _ from 'lodash';
import marked from 'marked';
import pretty from 'pretty';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as ReactComponents from '../../components/index';
import CodeSnippet from './CodeSnippet';
import Heading from '../../components/atoms/Heading/Heading';

import { extractComponentNameFromPath, isFullWidthComponent } from '../utils/componentUtil';

const NoComponentFound = () =>
    <p>Component not found. It must be exported via the src/components/index.js file.</p>;

const ReactComponent = ({ path, metadata }) => {
    const ComponentToRender = ReactComponents.default[path] || NoComponentFound;
    const examples = metadata.examples || [];
    const componentName = extractComponentNameFromPath(path);
    return (
        <div id={componentName}>
            <div className="container container--medium container--no-margin">
                <Heading level={2} text={componentName} />
                <div dangerouslySetInnerHTML={{ __html: marked(metadata.description) }}></div>
            </div>

            {_.isEmpty(examples) ? <p>No examples</p> : null}
            {isFullWidthComponent(componentName) ?
                _.map(examples, (example, i) => {
                    const componentWithProps = example.props.children ?
                        <ComponentToRender {...example.props}>
                            <div dangerouslySetInnerHTML={{ __html: example.props.children }} />
                        </ComponentToRender> :
                        <ComponentToRender {...example.props} />;

                    const markupString = pretty(ReactDOMServer.renderToStaticMarkup(componentWithProps));
                    return (
                        <div key={i}>
                            <div className="container container--medium container--no-margin">
                                <Heading level={3} text={example.name} />
                            </div>
                            <div className={example.containerCssClass || ''}>
                                {componentWithProps}
                            </div>
                            <div className="container container--medium container--no-margin">
                                <CodeSnippet code={markupString} language="markup" />
                            </div>
                        </div>
                    );
                }) :
                _.map(examples, (example, i) => {
                    const componentWithProps = example.props.children ?
                        <ComponentToRender {...example.props}>
                            <div dangerouslySetInnerHTML={{ __html: example.props.children }} />
                        </ComponentToRender> :
                        <ComponentToRender {...example.props} />;

                    const markupString = pretty(ReactDOMServer.renderToStaticMarkup(componentWithProps));
                    return (
                        <div key={i} className="container container--medium">
                            <Heading level={3} text={example.name} />
                            <div className={example.containerCssClass || ''}>
                                {componentWithProps}
                            </div>
                            <CodeSnippet code={markupString} language="markup" />
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ReactComponent;