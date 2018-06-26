import React from 'react';
import { LabelWithIcon } from '@telia/styleguide';

const infoIcon = '/public/icons/ico_info.svg';

const DefaultLabelWithIcon = () => (
    <LabelWithIcon iconSrc={infoIcon} tooltipText="Tooltip text">
        This is label with info icon
    </LabelWithIcon>
);

export default DefaultLabelWithIcon;