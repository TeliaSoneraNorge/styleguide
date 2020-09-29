import React from 'react';
import CodeSnippet from '../lib/CodeSnippet';

import { Header, Alert } from '../../index';

const codeSnippets = {
  stylesheetHtmlTag: '<link href="/path/to/your/styleguide/telia-styleguide.css" rel="stylesheet" type="text/css" />',
  componentLibraryInstall: `npm install @telia/styleguide --save`,
  componentLibraryImportButton: `import { Button } from '@telia/styleguide';`,
  componentLibraryUseButton: `<Button text="Click me" />`,
  componentLibraryIconsImport: `import AllIcons from '@telia/styleguide/assets/allicons/AllIcons';`,
  componentLibraryIconsInsert: `<AllIcons />`,
  componentLibraryIconsExample: `<SvgIcon iconName="ico_heart" color="purple" />`,
  TabKeyDetection: 'ReactDOM.render(<><TabKeyDetection/><App /> </>, document.getElementById("root"));',
  useTabKeyDetection: 'const App = () => { useTabKeyDetection(); return ...}',
};

export const DownloadAndInstall = () => (
  <div>
    <Header pageTitle="Download/Install Styleguide" />

    <div className="container container--small">
      <Alert kind="info">
        <p>
          The styleguide is now <strong>production-ready</strong>, but we still want to know who is using it. Drop us a
          line over at #styleguide and let us know what you&#39;re upto. Thanks!
        </p>
      </Alert>
      <h2 className="heading heading--level-2">Download the CSS &amp; assets</h2>
      <p className="paragraph">To use the Telia Styleguide in your project, follow these steps:</p>
      <ol>
        <li>Download the styleguide assets and include them in your project.</li>
        <li>Link to the downloaded CSS file in your HTML:</li>
      </ol>
      <CodeSnippet code={codeSnippets.stylesheetHtmlTag} language="markup" />

      <p className="paragraph">
        <strong>Do not link directly to anything on the styleguide website!</strong>
      </p>
      <a className="button button--margin-top" href="/TeliaStyleguide-Latest.zip" target="_blank">
        Download
      </a>
    </div>

    <div className="container container--small">
      <h2 className="heading heading--level-2">React Component Library</h2>
      <p className="paragraph">To use the React component library in your project, install it as a dependency:</p>
      <CodeSnippet code={codeSnippets.componentLibraryInstall} language="javascript" />

      <p className="paragraph">Import a component:</p>
      <CodeSnippet code={codeSnippets.componentLibraryImportButton} language="javascript" />

      <p className="paragraph">Use the component:</p>
      <CodeSnippet code={codeSnippets.componentLibraryUseButton} language="markup" />
    </div>

    <div className="container container--small container--extra-margin-bottom">
      <h2 className="heading heading--level-2">Icons</h2>
      <p className="paragraph">If you are using the React component library, import the icons:</p>
      <CodeSnippet code={codeSnippets.componentLibraryIconsImport} language="javascript" />
      <p className="paragraph">Then insert them into the DOM at the top of your app:</p>
      <CodeSnippet code={codeSnippets.componentLibraryIconsInsert} language="javascript" />
      <p className="paragraph">At this point, just render icons like this:</p>
      <CodeSnippet code={codeSnippets.componentLibraryIconsExample} language="javascript" />

      <p className="paragraph">
        If you are not using the React component library, you need to insert the icoons into the DOM some other way -
        manually, or by loading the file from disk on the server side and printing its contents into your HTML.
      </p>
    </div>

    <div className="container container--small container--extra-margin-bottom">
      <h2 className="heading heading--level-2">Tab detection</h2>
      <p className="paragraph">
        To enable focus style only when user is tabbing either add the TabKeyDetection component somewhere at the root
        of your project
      </p>
      <CodeSnippet code={codeSnippets.TabKeyDetection} language="javascript" />
      <br />
      <p className="paragraph">Or call the hook in your root component</p>
      <CodeSnippet code={codeSnippets.useTabKeyDetection} language="javascript" />
      <br />
      <p className="paragraph">
        To test in development call the hook or render the TabKeyDetection component in your component
      </p>
    </div>
  </div>
);
