import React from 'react';
import { Hero } from '@telia/styleguide';

const sources = [
    { type: 'mobile', srcSet: require('../../../../assets/website-images/hero1_mobil.jpg') },
    { type: 'desktop', srcSet: require('../../../../assets/website-images/hero1.jpg') }
];

const WithPebblesOnlyOnMobile = () => (
    <Hero
        href="#Hero"
        heading="Hero with pebbles only on mobile"
        subheading="The hero image is center aligned"
        alt="Woman smiling while looking at her mobile phone"
        sources={sources}
        pebbles="variant-3"
        mode="mobile" />
);

export default WithPebblesOnlyOnMobile;