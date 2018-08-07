import React from 'react';
import { TextBoxWithLabel, LabelWithIcon } from '@telia/styleguide';

const TypeTextWithIconLabel = () => {
    return (
        <TextBoxWithLabel
            labelText="Label for text box"
            type="text"
            placeholder="Write here..."
            tooltipText="Some really useful tooltip text" />
    );
};

export default TypeTextWithIconLabel;