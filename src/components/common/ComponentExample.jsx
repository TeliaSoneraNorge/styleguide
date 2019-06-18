import _ from 'lodash';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import CodeSnippet from  './CodeSnippet';
import { isFullWidthComponent } from '../../utils/componentUtil';

const ComponentExample = ({ example, exampleName, componentName }) => {
    const Example = _.get(example, 'default', null);
    if (!Example) return <p>Problem with example {exampleName}</p>;
    
    const html = renderToStaticMarkup(<Example />);

    return (
        <div>
            <div className="container container--medium container--no-margin">
                <h3 className="heading heading--level-3">{exampleName}</h3>
            </div>
            <div className={`container container--no-margin ${isFullWidthComponent(componentName) ? '': 'container--medium'}`}>
                <Example />
            </div>
            <div className="container container--medium container--no-margin">
                <CodeSnippet language="html" code={html} toggle={true} />
            </div>
        </div>
    );
};

export default ComponentExample;