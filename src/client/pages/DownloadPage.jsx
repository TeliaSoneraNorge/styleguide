import React from 'react';

import CodeSnippet from '../components/CodeSnippet';
import Heading from '../../components/atoms/Heading/Heading';

const codeSnippets = {
    stylesheetHtmlTag: '<link href="/path/to/your/styleguide/telia-styleguide.css" rel="stylesheet" type="text/css" />'
};

const DownloadPage = ({ colors }) =>
    <div className="content-wrapper">
        <Heading level={1} text="Download" />
        <p>To use the Telia Styleguide in your project, follow these steps:</p>
        <p>1) Download the styleguide assets and include them in your project.</p>
        <p>2) Link to the downloaded CSS file in your HTML:</p>
        <CodeSnippet code={codeSnippets.stylesheetHtmlTag} language="markup" />
        <p><strong>Do not link directly to anything on the styleguide website!</strong></p>
        <p><a className="button" href="/download-zip" target="_blank">Download</a></p>
    </div>;

export default DownloadPage;