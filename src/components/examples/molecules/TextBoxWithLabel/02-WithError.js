import React from 'react';
import { TextBoxWithLabel } from 'component-lib';

const ErrorTextBox = () => (
    <TextBoxWithLabel
        labelText="Label for text box"
        type="text"
        placeholder="Write here..."
        errorMessage="Oops! this happened" />
);

export default ErrorTextBox;