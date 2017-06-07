import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import Color from '../components/Color';
import Heading from '../../components/atoms/Heading/Heading';
import { getMergedMetadata } from '../../componentMetadata';
import { extractComponentNameFromPath, groupComponentMetadataByType } from '../utils/componentUtil';

const componentMetadata = getMergedMetadata();
const groupedComponentMetadata = groupComponentMetadataByType(componentMetadata);

const pageSnippets = {
    bem: ".block {}\n.block__element {}\n.block__element--modifier {}"
};

const ContributingPage = ({ colors }) =>
    <div className="content-wrapper">
        <Heading level={1} text="Contributing to the Styleguide" />
        <p>We welcome all frontend developers - in collaboration with designers - to contribute to the styleguide.</p>

        <Heading level={2} text="The repository" />
        <p>The repository can be found on TeliaSoneraNorge's GitHub account: <a href="https://github.com/TeliaSoneraNorge/styleguide">TeliaSoneraNorge/styleguide</a></p>

        <Heading level={2} text="Writing CSS" />
        <p>For our own components, follow the <b>BEM</b> (Block, Element, Modifier) method for writing &amp; organising CSS. BEM helps keep our CSS logical and predictable. The naming convention follows this pattern:</p>
        <pre><code className="language-css" dangerouslySetInnerHTML={{ __html: pageSnippets.bem }}></code></pre>
        <ul>
            <li><code className="language-css">.block</code> represents the higher level of an abstraction or component.</li>
            <li><code className="language-css">.block__element</code> represents a descendent of <code className="language-css">.block</code> that helps form <code className="language-css">.block</code> as a whole.</li>
            <li><code className="language-css">.block--modifier</code> represents a different state or version of <code className="language-css">.block</code>.</li>
        </ul>
        <p>For more information on BEM, <a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">please see this article</a>.</p>

        <Heading level={2} text="Typography" />
        <p>Our fonts, sizes and weights should be consistent across the page. The Pebble font should only be used in (TODO) scenarios because (TODO).</p>
        <div className="sg-component__example-rendered">
            {_.map([1, 2, 3, 4, 5, 6], (level) =>
                <Heading key={level} level={level} text={`h${level}. Heading level ${level}`} />
            )}
        </div>

        <Heading level={2} text="Sizes and units (px, em, rem)" />
        <p>When writing CSS, the styleguide uses these rules:</p>
        <ul>
            <li>Sizes and spacing should be in REM's.</li>
            <li>Media queries should be in EM's.</li>
            <li>Pixels should not avoided.</li>
        </ul>
        <p>Source: <a href="http://engageinteractive.co.uk/blog/em-vs-rem-vs-px">EM vs REM vs PX – Why you shouldn't “just use pixels”</a></p>

        <Heading level={2} text="Colors" />
        {_.map(colors, (color) =>
            <Color {...color} />
        )}
    </div>;

const mapStateToProps = (state) => ({
    colors: state.colors
});

export default connect(mapStateToProps)(ContributingPage);