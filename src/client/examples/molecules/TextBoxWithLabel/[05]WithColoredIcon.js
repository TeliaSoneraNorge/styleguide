import React from 'react';
import { TextBoxWithLabel } from '@telia/styleguide';

const TypeSearch = () => (
    <TextBoxWithLabel
        labelText="Label for text box"
        type="text"
        withIcon={true}
        iconName="ico_check"
        iconColor="purple" />
);

export default TypeSearch;