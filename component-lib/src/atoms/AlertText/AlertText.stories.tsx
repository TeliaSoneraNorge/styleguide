import React from "react";
import { storiesOf } from "@storybook/react";

import AlertText from "./AlertText";

storiesOf("Atoms|AlertText", module).add("AlertText", () => (
    <AlertText>Chat is closed</AlertText>
));
