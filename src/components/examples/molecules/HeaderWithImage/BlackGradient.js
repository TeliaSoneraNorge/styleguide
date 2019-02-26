import React from 'react';
import { HeaderWithImage } from '@telia/styleguide';

const BlackGradient = () => (
    <HeaderWithImage
        imgSrcMobile="/public/website-images/hero.jpg"
        imgSrcDesktop="/public/website-images/hero.jpg"
        whiteText
        withGradient
        pageTitle="Page Title">
        Preamble; an introductory and expressionary statement in a document that explains the document's purpose and
        underlying philosophy.
    </HeaderWithImage>
);

export default BlackGradient;