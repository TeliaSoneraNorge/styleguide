import React from 'react';
import { HeaderWithImage } from '@telia/styleguide';

const BlackGradient = () => (
  <HeaderWithImage
    imgSrcMobile={require('assets/website-images/hero.jpg')}
    imgSrcDesktop={require('assets/website-images/hero.jpg')}
    whiteText
    withGradient
    pageTitle="Page Title"
  >
    Preamble; an introductory and expressionary statement in a document that explains the document&#39;s purpose and
    underlying philosophy.
  </HeaderWithImage>
);

export default BlackGradient;
