import React from 'react';

import CodeSnippet from '../common/CodeSnippet';
import { Heading, Header } from '../../../component-lib/src/index';

const codeSnippets = {
    bem: '.block {}\n.block__element {}\n.block__element--modifier {}'
};

const ContributingPage = ( ) =>
    <div>
        <Header pageTitle="Contributing">
            <p>We welcome all frontend developers - in collaboration with designers - to contribute to the styleguide.</p>
            <p>Together, we can Make Telia&#39;s Frontend Great Again&trade;!</p>
        </Header>
        <div className="container container--small">
            <Heading level={2} text="The repository" />
            <p className="paragraph">
                The repository can be found on TeliaSoneraNorge&#39;s GitHub
                account: <a className="link" href="https://github.com/TeliaSoneraNorge/styleguide">TeliaSoneraNorge/styleguide</a>.
                Ask someone in #styleguide if you need access.
            </p>
        </div>
        <div className="container container--small">
            <Heading level={2} text="Writing CSS" />
            <p className="paragraph">
                Use <b>BEM</b> (Block, Element, Modifier) for writing &amp; organising CSS.
                BEM helps keep our CSS logical and predictable. The naming convention follows this pattern:
            </p>
            <CodeSnippet code={codeSnippets.bem} language="css" />
            <ul>
                <li><code className="language-css">.block</code> represents the higher level of an abstraction or component.</li>
                <li>
                    <code className="language-css">.block__element</code> represents a descendent of <code className="language-css">.block</code> that
                    helps form <code className="language-css">.block</code> as a whole. No more than 1 level of elements!
                </li>
                <li><code className="language-css">.block--modifier</code> represents a different state or version of <code className="language-css">.block</code>.</li>
            </ul>
            <p className="paragraph">For more information on BEM, <a className="link" href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">please see this article</a>.</p>
        </div>
        <div className="container container--small">
            <Heading level={2} text="Code style" />
            <p className="paragraph">
                Be <strong>consistent</strong>. Copy the code style, formatting, etc. that all other files use.
                If we want to change a rule in the code styling, we should do so globally in a single commit.
                Also, don&#39;t reformat lots of code at the same time as a feature commit.
            </p>
        </div>
        <div className="container container--small">
            <Heading level={2} text="Feature branches & Pull Requests" />
            <p className="paragraph">
                All changes must be done in feature branches with this naming convention:
            </p>
            <ul>
                <li><code>feature/your-feature-name</code></li>
                <li><code>bugfix/some-bugfix-name</code></li>
                <li><code>refactor/some-refactoring-name</code></li>
            </ul>
            <p className="paragraph">
                Once the feature is complete, create a Pull Request on GitHub and post a link to it on the #styleguide Slack channel.
            </p>
        </div>
        <div className="container container--small container--extra-margin-bottom">
            <Heading level={2} text="Before submitting a PR" />
            <ul>
                <li>Code is formatted cleanly, consistently, and passes ESLint rules.</li>
                <li>CSS follows BEM pattern.</li>
                <li>UI is responsive across all relevant screen sizes.</li>
                <li>Cross-browser compatibility: UI looks and behave equally in latest versions of Chrome, Safari, IE, Edge and Firefox.</li>
                <li>Component is accessible.</li>
                <li>Relevant examples are shown in the styleguide.</li>
                <li>Component has useful documentation.</li>
            </ul>
        </div>
    </div>;

export default ContributingPage;