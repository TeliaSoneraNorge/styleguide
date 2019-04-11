import React from 'react';
import { TextAreaWithLabel } from 'component-lib';

const TextAreaWithError = () => (
    <TextAreaWithLabel
        labelText="Label for text area"
        placeholder="Placeholder text here..."
        error="Unexpected error occured" />
);

export default TextAreaWithError;