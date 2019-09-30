import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "../src/business/Button";
import Toggle from "../src/business/Toggle";
import { Welcome } from "@storybook/react/demo";
import "!style-loader!postcss-loader!../src/business.pcss";

storiesOf("Welcome", module).add("to Storybook", () => (
    <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
    .add("with text", () => (
        <Button text="Hello Button" onClick={action("clicked")} />
    ))
    .add("with some emoji", () => (
        <Button onClick={action("clicked")} text="😀 😎 👍 💯" />
    ));

storiesOf("Toggle", module)
    .add('default', () => (
        <Toggle checked={false} />
    ))
    .add('checked', () => (
        <Toggle checked={true} />
    ));