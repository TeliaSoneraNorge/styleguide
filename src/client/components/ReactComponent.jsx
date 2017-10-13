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

const ReactComponentWithProps = (ComponentToRender, props) => {
    return (props.children) ?
        <ComponentToRender {...props}>
            <div dangerouslySetInnerHTML={{ __html: props.children }} />
        </ComponentToRender> :
        <ComponentToRender {...props} />;
};

const ReactComponent = ({ path, metadata }) => {
    const ComponentToRender = ReactComponents.default[path] || NoComponentFound;
    const examples = metadata.examples || [];
    const componentName = extractComponentNameFromPath(path);

    return (
        <div id={componentName} className="sg-component">
            <div className="container container--medium container--no-margin">
                <Heading level={2} text={componentName} />
                <div dangerouslySetInnerHTML={{ __html: marked(metadata.description) }}></div>
            </div>

            {_.isEmpty(examples) ? <p>No examples</p> : null}

            {_.map(examples, (example, i) => {
                const componentWithProps = ReactComponentWithProps(ComponentToRender, example.props);
                const markupString = pretty(ReactDOMServer.renderToStaticMarkup(componentWithProps));
                const renderedComponent = (example.render === false) ? "This component is not possible to render within the StyleGuide. Please look for a link to an example page in the component description." : ReactComponentWithProps(ComponentToRender, example.props);

                return (isFullWidthComponent(componentName) ?
                    <div key={i}>
                        <div className="container container--medium container--no-margin">
                            <Heading level={3} text={example.name} />
                        </div>
                        <div className={example.containerCssClass ? example.containerCssClass + ' sg-margin-top' : 'sg-margin-top'}>{renderedComponent}</div>
                        <div className="container container--medium container--no-margin">
                            <CodeSnippet code={markupString} language="markup" />
                        </div>
                    </div> :
                    <div key={i} className="container container--medium container--no-margin">
                        <Heading level={3} text={example.name} />
                        <div className={example.containerCssClass || ''}>{renderedComponent}</div>
                        <CodeSnippet code={markupString} language="markup" />
                    </div>);
            })}
        </div>
    );
};

export default ReactComponent;