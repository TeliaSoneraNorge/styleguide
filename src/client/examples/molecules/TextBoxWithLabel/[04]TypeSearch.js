import React from 'react';
import { TextBoxWithLabel } from '@telia/styleguide';

const TypeSearch = () => (
    <TextBoxWithLabel
        labelText="Label for search box"
        type="search"
        withIcon
        withIconButton
        iconName="ico_search" />
);

export default TypeSearch;