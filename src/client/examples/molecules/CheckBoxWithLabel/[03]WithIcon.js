import React from 'react';
import { CheckBoxWithLabel } from '@telia/styleguide';

const infoIcon = '/public/icons/ico_info.svg';

const WithIconLabel = () => {
    return (
        <CheckBoxWithLabel
            label="Label for text box"
            iconSrc={infoIcon}
            tooltipText="Tooltip Text" />
    );
};

export default WithIconLabel;