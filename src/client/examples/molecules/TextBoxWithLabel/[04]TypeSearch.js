import React from 'react';
import { TextBoxWithLabel } from '@telia/styleguide';

const TypeSearch = () => (
    <TextBoxWithLabel
        labelText="Label for search box"
        type="search"
        withIcon={true}
        icon="/public/icons/ico_search.svg" />
);

export default TypeSearch;