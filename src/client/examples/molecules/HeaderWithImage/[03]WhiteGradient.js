import React from 'react';
import { HeaderWithImage } from '@telia/styleguide';

const Default = () => (
    <HeaderWithImage
        imgSrcMobile="/public/website-images/light-image.jpg"
        imgSrcDesktop="/public/website-images/light-image.jpg"
        blackText
        withGradient
        pageTitle="Page Title">
        Preamble; an introductory and expressionary statement in a document that explains the document's purpose and
        underlying philosophy.
    </HeaderWithImage>
);

export default Default;