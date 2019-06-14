import React from 'react';
import { HeaderWithImage } from '@telia/styleguide';

const WhiteGradient = () => (
    <HeaderWithImage
        imgSrcMobile={require('assets/website-images/light-image.jpg')}
        imgSrcDesktop={require('assets/website-images/light-image.jpg')}
        blackText
        withGradient
        pageTitle="Page Title">
        Preamble; an introductory and expressionary statement in a document that explains the document's purpose and
        underlying philosophy.
    </HeaderWithImage>
);

export default WhiteGradient;