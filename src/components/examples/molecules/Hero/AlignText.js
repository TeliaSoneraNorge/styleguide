import React from 'react';
import { Hero } from '@telia/styleguide';

const sources = [
  { type: 'mobile', srcSet: '/public/website-images/hero.jpg' },
  { type: 'desktop', srcSet: '/public/website-images/hero.jpg' },
];

const AlignText = () => (
  <Hero
    href="#Hero"
    heading="A heading for this Hero"
    subheading="The textbox can also be repositioned"
    alt="Woman taking photo with her mobile phone by a lake"
    align="top"
    alignBox="right"
    sources={sources}
  />
);

export default AlignText;
