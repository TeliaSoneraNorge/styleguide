import React from 'react';
import Hero from './Hero';

export default {
  title: 'Component library|Molecules/Hero',
  component: Hero,
};

// TODO: we currently reference images outside of the component-lib folder.
// This is probably wrong. How do we wish to do this? Move/copy them over...?

export const Default = () => (
  <Hero
    href="#Hero"
    heading="A heading for this Hero"
    subheading="And this hero image is top aligned"
    alt="Woman taking photo with her mobile phone by a lake"
    align="top"
    sources={[
      { type: 'mobile', srcSet: require('../../../../src/assets/website-images/hero.jpg') },
      { type: 'desktop', srcSet: require('../../../../src/assets/website-images/hero.jpg') },
    ]}
  />
);

export const AlignText = () => (
  <Hero
    href="#Hero"
    heading="A heading for this Hero"
    subheading="The textbox can also be repositioned"
    alt="Woman taking photo with her mobile phone by a lake"
    align="top"
    alignBox="right"
    sources={[
      { type: 'mobile', srcSet: require('../../../../src/assets/website-images/hero.jpg') },
      { type: 'desktop', srcSet: require('../../../../src/assets/website-images/hero.jpg') },
    ]}
  />
);

export const WithLogo = () => (
  <Hero
    href="#Hero"
    heading="Hero with static logo image"
    subheading="The logo image is top right aligned"
    alt="Woman smiling while looking at her mobile phone"
    sources={[
      { type: 'mobile', srcSet: require('../../../../src/assets/website-images/hero1_mobil.jpg') },
      { type: 'desktop', srcSet: require('../../../../src/assets/website-images/hero1.jpg') },
    ]}
    logoSources={[
      { type: 'mobile', srcSet: require('../../../../src/assets/website-images/BusinessDevelopment_Pebble.png') },
      { type: 'desktop', srcSet: require('../../../../src/assets/website-images/BusinessDevelopment_Pebble.png') },
    ]}
    logoAlign="top-right"
  />
);

export const WithPebbles = () => (
  <Hero
    href="#Hero"
    heading="Hero with pebbles on mobile &amp; desktop"
    subheading="A subheading for this Hero"
    alt="Woman taking photo with her mobile phone by a lake"
    sources={[
      { type: 'mobile', srcSet: require('../../../../src/assets/website-images/hero.jpg') },
      { type: 'desktop', srcSet: require('../../../../src/assets/website-images/hero.jpg') },
    ]}
    pebbles="variant-3"
  />
);

export const WithPebblesOnlyOnDesktop = () => (
  <Hero
    href="#Hero"
    heading="Hero with pebbles only on desktop"
    subheading="The image is bottom aligned, seen when browser is bigger than 1440px.o"
    alt="Man stretching his leg by a lake"
    sources={[
      { type: 'mobile', srcSet: require('../../../../src/assets/website-images/hero2_mobil.jpg') },
      { type: 'desktop', srcSet: require('../../../../src/assets/website-images/hero2.jpg') },
    ]}
    pebbles="variant-3"
    mode="desktop"
  />
);

export const WithPebblesOnlyOnMobile = () => (
  <Hero
    href="#Hero"
    heading="Hero with pebbles only on mobile"
    subheading="The hero image is center aligned"
    alt="Woman smiling while looking at her mobile phone"
    sources={[
      { type: 'mobile', srcSet: require('../../../../src/assets/website-images/hero1_mobil.jpg') },
      { type: 'desktop', srcSet: require('../../../../src/assets/website-images/hero1.jpg') },
    ]}
    pebbles="variant-3"
    mode="mobile"
  />
);