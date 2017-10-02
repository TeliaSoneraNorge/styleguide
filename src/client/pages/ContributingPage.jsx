import React from 'react';

import CodeSnippet from '../components/CodeSnippet';
import Heading from '../../components/atoms/Heading/Heading';
import Header from '../../components/molecules/Header/Header';

const codeSnippets = {
    bem: ".block {}\n.block__element {}\n.block__element--modifier {}"
};

const ContributingPage = ({ colors }) =>
    <div>
        <Header pageTitle="Contributing">
            <p>We welcome all frontend developers - in collaboration with designers - to contribute to the styleguide.</p>
        </Header>
        <div className="container container--small">

            <Heading level={2} text="The repository" />
            <p>The repository can be found on TeliaSoneraNorge's GitHub account: <a className="link" href="https://github.com/TeliaSoneraNorge/styleguide">TeliaSoneraNorge/styleguide</a></p>

            <Heading level={2} text="Writing CSS" />
            <p>For our own components, follow the <b>BEM</b> (Block, Element, Modifier) method for writing &amp; organising CSS. BEM helps keep our CSS logical and predictable. The naming convention follows this pattern:</p>
            <CodeSnippet code={codeSnippets.bem} language="css" />
            <ul>
                <li><code className="language-css">.block</code> represents the higher level of an abstraction or component.</li>
                <li><code className="language-css">.block__element</code> represents a descendent of <code className="language-css">.block</code> that helps form <code className="language-css">.block</code> as a whole.</li>
                <li><code className="language-css">.block--modifier</code> represents a different state or version of <code className="language-css">.block</code>.</li>
            </ul>
            <p>For more information on BEM, <a className="link" href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">please see this article</a>.</p>

        </div>
    </div>;

export default ContributingPage;