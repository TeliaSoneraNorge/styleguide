import _ from 'lodash';
import React from 'react';

import Color from '../common/Color';
import { Heading, Header } from '../../../component-lib/src/index';
import { getStaticData } from '../../utils/staticDataUtil';

const colors = getStaticData('colors');

const HomePage = () =>
    <div>
        <Header
            iconName="ico_code-2"
            runningTitle="Greetings, Earthlings!"
            pageTitle="Telia Norge Styleguide"
            withMask={true}>
            <p>
                This styleguide offers color schemes, components (both plain HTML and React) and CSS to be used in Telia Norway's digital channels.
            </p>
            <p>
                Talk with us in the #styleguide Slack channel and let us know if and how you intend to use the styleguide. Enjoy :)
            </p>
        </Header>

        <div className="container container--small container--extra-padding-top">
            <Heading level={2} text="Color Palette" />
            <p className="paragraph">The color palette below was taken from the Telia Company design document (TODO: source) and shows the recommended font color to give the correct contrast.</p>
        </div>
        <div className="container container--medium">
            <div className="sg-colors-wrapper">
                {_.map(colors[0], (color, name) => <Color key={name} name={name} {...color} />)}
            </div>
            <div className="sg-colors-wrapper">
                {_.map(colors[1], (color, name) => <Color key={name} name={name} {...color} />)}
            </div>
            <div className="sg-colors-wrapper">
                {_.map(colors[2], (color, name) => <Color key={name} name={name} {...color} />)}
            </div>
        </div>

        <div className="container container--small">
            <Heading level={2} text="Typography" />
            <ul>
                <li><strong>Heading level one</strong> should be used once per page. And is the main heading of the page. Due to accessibility and readability this is the only heading that use the pebble font.</li>
                <li>The content of a page is usually divided into sections, and <strong>heading level two</strong> should be used as the heading of these.</li>
                <li><strong>Heading level three</strong> and <strong>heading level four</strong> is used when you need to divide content in even smaller sections.</li>
            </ul>

            <p className="paragraph">These are the heading levels defined in this styleguide:</p>
            {_.map([1, 2, 3, 4], (level) =>
                <Heading key={level} level={level} text={`h${level}. Heading level ${level}`} />
            )}
        </div>

        <div className="container container--small container--extra-margin-bottom">
            <Heading level={2} text="Sizes and units (px, em, rem)" />
            <p className="paragraph">When writing CSS, the styleguide uses these rules:</p>
            <ul>
                <li>Sizes and spacing should be in REM's.</li>
                <li>Media queries should be in EM's.</li>
                <li>Pixels should be avoided, where possible.</li>
            </ul>
            <p className="paragraph">Source: <a className="link" href="http://engageinteractive.co.uk/blog/em-vs-rem-vs-px">EM vs REM vs PX – Why you shouldn't “just use pixels”</a></p>
        </div>
    </div>;

export default HomePage;