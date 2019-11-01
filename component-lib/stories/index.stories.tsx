import React from "react";

import { storiesOf } from "@storybook/react";

/**
 * We can import the .pcss file directly here thanks to the .pcss
 * loader in the storybook-specific .storybook/webpack.config.js.
 */
import "../src/index.pcss";
import "../src/business.pcss";

import HomePage from "./home/HomePage";
import ColorPalette from "./home/ColorPalette";
import Typography from "./home/Typography";

storiesOf("Introduction|Home", module)
    .add("Greetings", () => <HomePage />)
    .add("Color palette", () => <ColorPalette />)
    .add("Typography", () => <Typography />);
