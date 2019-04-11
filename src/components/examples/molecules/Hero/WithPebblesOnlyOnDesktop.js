import React from 'react';
import { Hero } from 'component-lib';

const sources = [
    { type: 'mobile', srcSet: require('../../../../assets/website-images/hero2_mobil.jpg') },
    { type: 'desktop', srcSet: require('../../../../assets/website-images/hero2.jpg') }
];

const WithPebblesOnlyOnDesktop = () => (
    <Hero
        href="#Hero"
        heading="Hero with pebbles only on desktop"
        subheading="The image is bottom aligned, seen when browser is bigger than 1440px.o"
        alt="Man stretching his leg by a lake"
        sources={sources}
        pebbles="variant-3"
        mode="desktop" />
);

export default WithPebblesOnlyOnDesktop;