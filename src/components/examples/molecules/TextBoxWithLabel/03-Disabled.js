import React from 'react';
import { TextBoxWithLabel } from '@telia/styleguide';

const DisabledTextBox = () => (
    <TextBoxWithLabel
        labelText="Label for text box"
        type="text"
        placeholder="Write here..."
        disabled />
);

export default DisabledTextBox;