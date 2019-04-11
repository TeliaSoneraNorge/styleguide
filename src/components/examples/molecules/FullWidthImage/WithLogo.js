import React from 'react';
import { FullWidthImage } from 'component-lib';

const logoSources = [
    { type: 'mobile', srcSet: require('../../../../assets/website-images/BusinessDevelopment_Pebble.png') },
    { type: 'desktop', srcSet: require('../../../../assets/website-images/BusinessDevelopment_Pebble.png') }
];

const FullWidthImageWithLogo = () => (
    <FullWidthImage
        logoSources={logoSources}
        logoAlign="top-right"
        src="https://placekitten.com/1440/440"
        alt="Kitten" />
);

export default FullWidthImageWithLogo;