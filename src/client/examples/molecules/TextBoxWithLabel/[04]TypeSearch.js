import React from 'react';
import { TextBoxWithLabel } from '@telia/styleguide';

const TypeSearch = () => (
    <TextBoxWithLabel
        labelText="Label for search box"
        type="search"
        withIcon={true}
        iconName= "ico_search"
        />
);

export default TypeSearch;