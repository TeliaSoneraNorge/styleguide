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

        <div className="container container--small container--extra-margin-bottom">
            <Alert kind="negative" bodyHtml={warningMessageHtml} />
            <p className="paragraph">To use the Telia Styleguide in your project, follow these steps:</p>
            <ol>
                <li>Download the styleguide assets and include them in your project.</li>
                <li>Link to the downloaded CSS file in your HTML:</li>
            </ol>
            <CodeSnippet code={codeSnippets.stylesheetHtmlTag} language="markup" />
            <p className="paragraph"><strong>Do not link directly to anything on the styleguide website!</strong></p>
            <a className="button button--margin-top" href="/download-zip" target="_blank">Download</a>
        </div>
    </div>;

export default DownloadPage;