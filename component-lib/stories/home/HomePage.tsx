import _ from "lodash";
import React from "react";

import Heading from "../../src/atoms/Heading/Heading";
import Header from "../../src/molecules/Header/Header";
import Color from "../lib/Color";

import colors from "../colors";

const HomePage = () => (
    <div>
        <Header
            iconName="ico_code-2"
            runningTitle="Greetings, Earthlings!"
            pageTitle="Telia Norge Styleguide"
            withMask={true}
        >
            <p>
                This styleguide offers color schemes, components (both plain
                HTML and React) and CSS to be used in Telia Norway's digital
                channels.
            </p>
            <p>
                Talk with us in the #styleguide Slack channel and let us know if
                and how you intend to use the styleguide. Enjoy :)
            </p>
        </Header>
    </div>
);

export default HomePage;
