import React from 'react';
import { Hero } from '@telia/styleguide';

const sources = [
    { type: 'mobile', srcSet: require('../../../../assets/website-images/hero.jpg') },
    { type: 'desktop', srcSet: require('../../../../assets/website-images/hero.jpg') }
];

const WithPebbles = () => (
    <Hero
        href="#Hero"
        heading="Hero with pebbles on mobile &amp; desktop"
        subheading="A subheading for this Hero"
        alt="Woman taking photo with her mobile phone by a lake"
        sources={sources}
        pebbles="variant-3" />
);

export default WithPebbles;