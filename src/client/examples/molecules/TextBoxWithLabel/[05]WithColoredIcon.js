import React from 'react';
import { TextBoxWithLabel } from '@telia/styleguide';

const TypeColoredIcon = () => (
    <TextBoxWithLabel
        labelText="Label for text box"
        type="text"
        withIcon
        iconName="ico_check"
        iconColor="purple" />
);

export default TypeColoredIcon;