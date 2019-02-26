import React from 'react';
import { Hero } from '@telia/styleguide';

const sources = [
    { type: 'mobile', srcSet: '/public/website-images/hero1_mobil.jpg' },
    { type: 'desktop', srcSet: '/public/website-images/hero1.jpg' }
];

const logoSources = [
    { type: 'mobile', srcSet: '/public/website-images/BusinessDevelopment_Pebble.png' },
    { type: 'desktop', srcSet: '/public/website-images/BusinessDevelopment_Pebble.png' }
];

const WithLogo = () => (
    <Hero
        href="#Hero"
        heading="Hero with static logo image"
        subheading="The logo image is top right aligned"
        alt="Woman smiling while looking at her mobile phone"
        sources={sources}
        logoSources={logoSources}
        logoAlign="top-right" />
);

export default WithLogo;