import React from 'react';
import { TextAreaWithLabel } from 'component-lib';

const DisabledTextArea = () => (
    <TextAreaWithLabel
        labelText="Label for text area"
        placeholder="Placeholder text here..."
        disabled />
);

export default DisabledTextArea;