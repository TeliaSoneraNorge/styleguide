import React from 'react';
import { TextBoxWithLabel } from 'component-lib';

const TypeSearch = () => (
    <TextBoxWithLabel
        labelText="Label for search box"
        type="search"
        withIcon
        iconName="ico_search"
        iconIsButton />
);

export default TypeSearch;