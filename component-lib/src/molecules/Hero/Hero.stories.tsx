import React from 'react';
import { Hero } from '../../index';
import img from '../../stories/sampleImages';

export default {
  title: 'Component library/Molecules/Hero',
  component: Hero,
};

export const Default = () => {
  const sources = [
    { type: 'mobile', srcSet: img.hero },
    { type: 'desktop', srcSet: img.hero },
  ];
  
  return (
    <Hero
      href="#Hero"
      heading="A heading for this Hero"
      subheading="And this hero image is top aligned"
      alt="Woman taking photo with her mobile phone by a lake"
      align="top"
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type '"mobile" ... Remove this comment to see the full error message
      sources={sources}
    />
  )
};

export const HeroAlignBoxRight = () => {
  const sources = [
    { type: 'mobile', srcSet: img.hero },
    { type: 'desktop', srcSet: img.hero },
  ];
  
  return (
    <Hero
      href="#Hero"
      heading="A heading for this Hero"
      subheading="The textbox can also be repositioned"
      alt="Woman taking photo with her mobile phone by a lake"
      align="top"
      alignBox="right"
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type '"mobile" ... Remove this comment to see the full error message
      sources={sources}
    />
  )
};

export const HeroWithLogo = () => {
  const sources = [
    { type: 'mobile', srcSet: img.hero1Mobil },
    { type: 'desktop', srcSet: img.hero1 },
  ];
  
  const logoSources = [
    { type: 'mobile', srcSet: img.businessDevelopmentPebble },
    { type: 'desktop', srcSet: img.businessDevelopmentPebble },
  ];

  return (
    <Hero
      href="#Hero"
      heading="Hero with static logo image"
      subheading="The logo image is top right aligned"
      alt="Woman smiling while looking at her mobile phone"
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type '"mobile" ... Remove this comment to see the full error message
      sources={sources}
      logoSources={logoSources}
      logoAlign="top-right"
    />
  )
};

export const WithPebbles = () => {
  const sources = [
    { type: 'mobile', srcSet: img.hero },
    { type: 'desktop', srcSet: img.hero },
  ];

  return (
    <Hero
      href="#Hero"
      heading="Hero with pebbles on mobile &amp; desktop"
      subheading="A subheading for this Hero"
      alt="Woman taking photo with her mobile phone by a lake"
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type '"mobile" ... Remove this comment to see the full error message
      sources={sources}
      pebbles="variant-3"
    />
  )
};

export const WithPebblesOnlyOnDesktop = () => {
  const sources = [
    { type: 'mobile', srcSet: img.hero2Mobil },
    { type: 'desktop', srcSet: img.hero2 },
  ];

  return (
    <Hero
      href="#Hero"
      heading="Hero with pebbles only on desktop"
      subheading="The image is bottom aligned, seen when browser is bigger than 1440px.o"
      alt="Man stretching his leg by a lake"
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type '"mobile" ... Remove this comment to see the full error message
      sources={sources}
      pebbles="variant-3"
      mode="desktop"
    />
  )
};

export const WithPebblesOnlyOnMobile = () => {
  const sources = [
    { type: 'mobile', srcSet: img.hero1Mobil },
    { type: 'desktop', srcSet: img.hero1 },
  ];

  return (
    <Hero
      href="#Hero"
      heading="Hero with pebbles only on mobile"
      subheading="The hero image is center aligned"
      alt="Woman smiling while looking at her mobile phone"
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type '"mobile" ... Remove this comment to see the full error message
      sources={sources}
      pebbles="variant-3"
      mode="mobile"
    />
  )
};