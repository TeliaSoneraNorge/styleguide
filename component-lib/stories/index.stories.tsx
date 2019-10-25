import React from "react";

import { storiesOf } from "@storybook/react";

import "!style-loader!postcss-loader!../src/index.pcss";
import HomePage from "./home/HomePage";
import ColorPalette from "./home/ColorPalette";
import Typography from "./home/Typography";

storiesOf("Introduction|Home", module)
    .add("Greetings", () => <HomePage />)
    .add("Color palette", () => <ColorPalette />)
    .add("Typography", () => <Typography />);
