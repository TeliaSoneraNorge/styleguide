import React from 'react';
import { HeaderWithImage} from '../../index';
import img from '../../stories/sampleImages';

export default {
  title: 'Component library/Molecules/HeaderWithImage',
  component: HeaderWithImage,
};

export const BlackGradient = () => (
  <HeaderWithImage
    imgSrcMobile={img.hero}
    imgSrcDesktop={img.hero}
    whiteText
    withGradient
    pageTitle="Page Title"
  >
    Preamble; an introductory and expressionary statement in a document that explains the document&#39;s purpose and
    underlying philosophy.
  </HeaderWithImage>
);

export const BlackText = () => (
  <HeaderWithImage
    imgSrcMobile={img.imageBlackText}
    imgSrcDesktop={img.imageBlackText}
    blackText
    pageTitle="Page Title"
  >
    Preamble; an introductory and expressionary statement in a document that explains the document&#39;s purpose and
    underlying philosophy.
  </HeaderWithImage>
);

export const WhiteGradient = () => (
  <HeaderWithImage
    imgSrcMobile={img.lightImage}
    imgSrcDesktop={img.lightImage}
    blackText
    withGradient
    pageTitle="Page Title"
  >
    Preamble; an introductory and expressionary statement in a document that explains the document&#39;s purpose and
    underlying philosophy.
  </HeaderWithImage>
);

export const WhiteText = () => (
  <HeaderWithImage
    imgSrcMobile={img.imageWhiteText}
    imgSrcDesktop={img.imageWhiteText}
    whiteText
    pageTitle="Page Title"
  >
    Preamble; an introductory and expressionary statement in a document that explains the document&#39;s purpose and
    underlying philosophy.
  </HeaderWithImage>
);