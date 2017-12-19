import React from 'react';

import CodeSnippet from '../components/CodeSnippet';
import Heading from '../../components/atoms/Heading/Heading';
import Header from '../../components/molecules/Header/Header';
import Alert from '../../components/molecules/Alert/Alert';

const codeSnippets = {
    stylesheetHtmlTag: '<link href="/path/to/your/styleguide/telia-styleguide.css" rel="stylesheet" type="text/css" />'
};

const warningMessageHtml =
    `<p>
        The styleguide is <strong>NOT YET READY TO BE USED!</strong> If you go ahead and use it anyway,
        you use it at your own risk. Can you at least drop us a line over at #styleguide and let us know
        what you're upto first? Thanks!
    </p>`;

const DownloadPage = ({ colors }) =>
    <div>
        <Header pageTitle="Download Styleguide" />

        <Alert kind="negative" bodyHtml={warningMessageHtml} />

        <div className="container container--small container--extra-margin-bottom">
            <p>To use the Telia Styleguide in your project, follow these steps:</p>
            <p>1) Download the styleguide assets and include them in your project.</p>
            <p>2) Link to the downloaded CSS file in your HTML:</p>
            <CodeSnippet code={codeSnippets.stylesheetHtmlTag} language="markup" />
            <p><strong>Do not link directly to anything on the styleguide website!</strong></p>
            <p><a className="button" href="/download-zip" target="_blank">Download</a></p>
        </div>
    </div>;

export default DownloadPage;