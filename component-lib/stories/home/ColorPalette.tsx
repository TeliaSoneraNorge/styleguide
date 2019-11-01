import _ from "lodash";
import React from "react";

import Heading from "../../src/atoms/Heading/Heading";
import Color from "../lib/Color";

import colors from "../colors";

const ColorPalette = () => (
    <div>
        <div className="container container--small container--extra-padding-top">
            <Heading level={2} text="Color Palette" />
            <p className="paragraph">
                The color palette below was taken from the{" "}
                <a
                    href="https://brandhub.teliacompany.com/document/14#/colour-palette/our-colour-palette"
                    target="_blank"
                >
                    Telia Company design document
                </a>{" "}
                and shows the recommended font color to give the correct
                contrast.
            </p>
        </div>
        <div className="container container--medium">
            <div className="sg-colors-wrapper">
                {_.map(colors[0], (color, name) => (
                    <Color key={name} name={name} {...color} />
                ))}
            </div>
            <div className="sg-colors-wrapper">
                {_.map(colors[1], (color, name) => (
                    <Color key={name} name={name} {...color} />
                ))}
            </div>
            <div className="sg-colors-wrapper">
                {_.map(colors[2], (color, name) => (
                    <Color key={name} name={name} {...color} />
                ))}
            </div>
            <hr style={{ marginTop: "2rem" }} />
            <div className="sg-colors-wrapper">
                <p>Additional colors</p>
                {_.map(colors[3], (color, name) => (
                    <Color key={name} name={name} {...color} />
                ))}
            </div>
        </div>
    </div>
);

export default ColorPalette;
