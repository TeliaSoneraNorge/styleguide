import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Toggle from "../src/business/Toggle";
import { Welcome } from "@storybook/react/demo";
import "!style-loader!postcss-loader!../src/business.pcss";

storiesOf("Welcome", module).add("to Storybook", () => (
    <Welcome showApp={linkTo("Button")} />
));

storiesOf("Toggle", module)
    .add('default', () => (
        <Toggle checked={false} />
    ))
    .add('checked', () => (
        <Toggle checked={true} />
    ));