import React from 'react';
import { SvgIcon } from '@telia/styleguide';

const DefaultSvgIcon = () => (
    <div>
        <SvgIcon iconName="ico_heart" color="black" title="Black heart" />
        <SvgIcon iconName="ico_heart" color="core-purple" />
        <SvgIcon iconName="ico_heart" color="light-grey" />
        <SvgIcon iconName="ico_heart" color="white" style={{background: '#990AE3'}} />
    </div>
);

export default DefaultSvgIcon;