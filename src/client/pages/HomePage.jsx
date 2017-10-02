import React from 'react';
import { connect } from 'react-redux';

import Color from '../components/Color';
import Heading from '../../components/atoms/Heading/Heading';
import Header from '../../components/molecules/Header/Header';

const HomePage = ({ colors }) =>
    <div>
        <Header
            iconUrl="/public/ico_code-2.svg"
            runningTitle="Greetings, Earthlings!"
            pageTitle="Telia Norge Styleguide"
            withMask={true}>
            <p>
                This is a not-yet-ready-for-production, work-in-progress, pre-alpha version of the new Styleguide. You can look, but don't touch (yet).
            </p>
            <p>
                When we roll this out to production, you will be the first to know. Until then, take a look around, and if you have any questions or
                suggestions we are available on the #styleguide channel on Slack. Peace.
            </p>
        </Header>

        <div className="container container--small container--no-margin">
            <Heading level={2} text="Color Palette" />
            <p>The color palette below was taken from the Telia Company design document (TODO: source) and shows the recommended font color to give the correct contrast.</p>
        </div>
        <div className="sg-colors-wrapper container container--medium">
            {_.map(colors, (color, name) => <Color key={name} name={name} {...color} />)}
        </div>

        <div className="container container--small container--no-margin">
            <Heading level={2} text="Typography" />
            <p>TODO: explain the rules for when to use each font (Pebble, Helvetica Neue), etc.</p>
            {_.map([1, 2, 3, 4], (level) =>
                <Heading key={level} level={level} text={`h${level}. Heading level ${level}`} />
            )}
        </div>

        <div className="container container--small">
            <Heading level={2} text="Sizes and units (px, em, rem)" />
            <p>When writing CSS, the styleguide uses these rules:</p>
            <ul>
                <li>Sizes and spacing should be in REM's.</li>
                <li>Media queries should be in EM's.</li>
                <li>Pixels should be avoided, where possible.</li>
            </ul>
            <p>Source: <a className="link" href="http://engageinteractive.co.uk/blog/em-vs-rem-vs-px">EM vs REM vs PX – Why you shouldn't “just use pixels”</a></p>
        </div>
    </div>;

const mapStateToProps = (state) => ({
    colors: state.colors
});

export default connect(mapStateToProps)(HomePage);