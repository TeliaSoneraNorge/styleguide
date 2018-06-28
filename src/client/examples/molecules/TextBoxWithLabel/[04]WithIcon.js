import React from 'react';
import { TextBoxWithLabel, LabelWithIcon } from '@telia/styleguide';

const infoIcon = '/public/icons/ico_info.svg';

const TypeTextWithIconLabel = () => {
    return (
        <TextBoxWithLabel
            labelText="Label for text box"
            type="text"
            placeholder="Write here..."
            iconSrc={infoIcon}
            tooltipText="Tooltip Text" />
    );
};

export default TypeTextWithIconLabel;