import _ from 'lodash';
import React from 'react';
import marked from 'marked';

import { Heading } from '../../../component-lib/src/index';
import ComponentExample from './ComponentExample';

const ComponentDocs = ({ component }) =>
    <div className="sg-component" id={component.name}>
        <div className="container container--medium container--no-margin">
            <Heading level={2} text={component.name} />
            <div dangerouslySetInnerHTML={{ __html: marked(component.docs) }} />
        </div>
        {_.map(component.examples, (example, key) =>
            <ComponentExample key={key} example={example} exampleName={key} componentName={component.name} />
        )}
    </div>;

export default ComponentDocs;