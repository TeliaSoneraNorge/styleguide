import React from 'react';
import { HeaderWithImage } from '@telia/styleguide';

const WhiteText = () => (
  <HeaderWithImage
    imgSrcMobile={require('assets/website-images/image-white-text.jpg')}
    imgSrcDesktop={require('assets/website-images/image-white-text.jpg')}
    whiteText
    pageTitle="Page Title"
  >
    Preamble; an introductory and expressionary statement in a document that explains the document's purpose and
    underlying philosophy.
  </HeaderWithImage>
);

export default WhiteText;
