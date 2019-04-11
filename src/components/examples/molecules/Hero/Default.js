import React from 'react';
import { Hero } from 'component-lib';

const sources = [
    { type: 'mobile', srcSet: require('../../../../assets/website-images/hero.jpg') },
    { type: 'desktop', srcSet: require('../../../../assets/website-images/hero.jpg') }
];

const DefaultHero = () => (
    <Hero
        href="#Hero"
        heading="A heading for this Hero"
        subheading="And this hero image is top aligned"
        alt="Woman taking photo with her mobile phone by a lake"
        align="top"
        sources={sources} />
);

export default DefaultHero;