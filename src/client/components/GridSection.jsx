import React from 'react';
import Tabs from 'react-simpletabs';

import CodeSnippet from './CodeSnippet';
import Heading from '../../components/atoms/Heading/Heading';

const codeSnippets = {
    gridCss:
        ':root {\n' +
        '    --grid-column-width: 82px;\n' +
        '    --grid-gutter-width: 20px;\n\n' +
        '    --width-large: 1204px; /* 12 cols, 11 gutters */ \n' +
        '    --width-medium: 796px; /* 8 cols, 7 gutters */ \n' +
        '    --width-small: 592px; /* 6 cols, 5 gutters */ \n' +
        '}',
    exampleCss:
        '.my-component {\n' +
        '    margin: 0 auto;\n' +
        '    max-width: var(--width-small);\n' +
        '}'
};

const GridSection = () =>
    <div>
        <Heading level={2} text="Grid" />
        <p>
            Since we are using BEM for our CSS naming-conventions, the only class names we see in
            the HTML should be our BEM component classes. We do not wish to clutter up the HTML
            markup with grid class names.
        </p>
        <p>
            However, there are a set of CSS variables which can be used to achieve a fluid grid layout.
            Each component should use these variables for its width, margins and in its media queries
            to achieve a responsive layout.
        </p>

        <Tabs>
            <Tabs.Panel title="Rendered">
                <div className="inner-content">
                    <div className="sg-grid-example">
                        <div className="sg-grid-example__content sg-grid-example__width-large">
                            <p>This content uses: --width-large.</p>
                        </div>
                        <div className="sg-grid-example__content sg-grid-example__width-medium">
                            <p>This content uses: --width-medium.</p>
                        </div>
                        <div className="sg-grid-example__content sg-grid-example__width-small">
                            <p>This content uses: --width-small.</p>
                        </div>
                    </div>
                </div>
            </Tabs.Panel>
            <Tabs.Panel title="CSS">
                <CodeSnippet code={codeSnippets.gridCss} language="css" />
            </Tabs.Panel>
        </Tabs>

        <p>
            If you want a component to use --small-width, your CSS may look like this:
        </p>
        <CodeSnippet code={codeSnippets.exampleCss} language="css" />
    </div>;

export default GridSection;