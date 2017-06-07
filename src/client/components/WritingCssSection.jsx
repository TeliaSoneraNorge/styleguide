import React from 'react';

import Heading from '../../components/atoms/Heading/Heading';

const codeSnippets = {
    bem: ".block {}\n.block__element {}\n.block__element--modifier {}"
};

const WritingCssSection = () =>
    <div>
        <Heading level={2} text="Writing CSS" />
        <p>For our own components, follow the <b>BEM</b> (Block, Element, Modifier) method for writing &amp; organising CSS. BEM helps keep our CSS logical and predictable. The naming convention follows this pattern:</p>
        <pre><code className="language-css" dangerouslySetInnerHTML={{ __html: codeSnippets.bem }}></code></pre>
        <ul>
            <li><code className="language-css">.block</code> represents the higher level of an abstraction or component.</li>
            <li><code className="language-css">.block__element</code> represents a descendent of <code className="language-css">.block</code> that helps form <code className="language-css">.block</code> as a whole.</li>
            <li><code className="language-css">.block--modifier</code> represents a different state or version of <code className="language-css">.block</code>.</li>
        </ul>
        <p>For more information on BEM, <a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">please see this article</a>.</p>
    </div>;

export default WritingCssSection;