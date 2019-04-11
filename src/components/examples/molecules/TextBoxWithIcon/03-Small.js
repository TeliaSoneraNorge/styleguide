import React from 'react';
import { TextBoxWithIcon } from 'component-lib';

const SmallTextBoxWithIcon = () => (
    <TextBoxWithIcon
        type="search"
        iconName="ico_search"
        iconLabel="Search"
        iconIsButton
        small />
);

export default SmallTextBoxWithIcon;