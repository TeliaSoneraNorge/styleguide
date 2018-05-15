import React from 'react';

import CodeSnippet from '../components/CodeSnippet';
import Heading from '../../components/atoms/Heading/Heading';
import Header from '../../components/molecules/Header/Header';
import Alert from '../../components/molecules/Alert/Alert';

const codeSnippets = {
    stylesheetHtmlTag: '<link href="/path/to/your/styleguide/telia-styleguide.css" rel="stylesheet" type="text/css" />',
    componentLibraryInstall: `npm install @telia/styleguide --save`,
    componentLibraryImportButton: `import { Button } from '@telia/styleguide';`,
    componentLibraryUseButton: `<Button text="Click me" />`,
};

const warningMessageHtml =
    `<p>
        The styleguide is now <strong>production-ready</strong>, but we still want to know who is using it.
        Drop us a line over at #styleguide and let us know what you're upto. Thanks!
    </p>`;

const DownloadPage = ({ colors }) =>
    <div>
        <Header pageTitle="Download Styleguide" />

        <div className="container container--small">
            <Alert kind="info" bodyHtml={warningMessageHtml} />
            <h2 className="heading heading--level-2">Download the CSS & assets</h2>
            <p className="paragraph">To use the Telia Styleguide in your project, follow these steps:</p>
            <ol>
                <li>Download the styleguide assets and include them in your project.</li>
                <li>Link to the downloaded CSS file in your HTML:</li>
            </ol>
            <CodeSnippet code={codeSnippets.stylesheetHtmlTag} language="markup" disableToggle={true} />

            <p className="paragraph"><strong>Do not link directly to anything on the styleguide website!</strong></p>
            <a className="button button--margin-top" href="/download-zip" target="_blank">Download</a>
        </div>

        <div className="container container--small container--extra-margin-bottom">
            <h2 className="heading heading--level-2">React Component Library</h2>
            <p className="paragraph">To use the React component library in your project, install it as a dependency:</p>
            <CodeSnippet code={codeSnippets.componentLibraryInstall} language="javascript" disableToggle={true} />

            <p className="paragraph">Import a component:</p>
            <CodeSnippet code={codeSnippets.componentLibraryImportButton} language="javascript" disableToggle={true} />

            <p className="paragraph">Use the component:</p>
            <CodeSnippet code={codeSnippets.componentLibraryUseButton} language="markup" disableToggle={true} />
        </div>
    </div>;

export default DownloadPage;