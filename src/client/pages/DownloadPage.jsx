import React from 'react';

import CodeSnippet from '../components/CodeSnippet';
import Heading from '../../components/atoms/Heading/Heading';
import Header from '../../components/molecules/Header/Header';

const codeSnippets = {
    stylesheetHtmlTag: '<link href="/path/to/your/styleguide/telia-styleguide.css" rel="stylesheet" type="text/css" />'
};

const DownloadPage = ({ colors }) =>
    <div>
        <Header pageTitle="Download Styleguide" />

        <div className="container container--small container--extra-padding-top container--extra-margin-bottom">
            <p>To use the Telia Styleguide in your project, follow these steps:</p>
            <p>1) Download the styleguide assets and include them in your project.</p>
            <p>2) Link to the downloaded CSS file in your HTML:</p>
            <CodeSnippet code={codeSnippets.stylesheetHtmlTag} language="markup" />
            <p><strong>Do not link directly to anything on the styleguide website!</strong></p>
            <p><a className="button button--action" href="/download-zip" target="_blank">Download</a></p>
        </div>
    </div>;

export default DownloadPage;