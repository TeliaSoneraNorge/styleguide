import React from 'react';
import { TextAreaWithLabel } from '@telia/styleguide';

const DisabledTextArea = () => (
    <TextAreaWithLabel
        labelText="Label for text area"
        placeholder="Placeholder text here..."
        disabled />
);

export default DisabledTextArea;