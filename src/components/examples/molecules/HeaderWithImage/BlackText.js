import React from 'react';
import { HeaderWithImage } from '@telia/styleguide';

const BlackText = () => (
    <HeaderWithImage
        imgSrcMobile={require('../../../../assets/website-images/image-black-text.jpg')}
        imgSrcDesktop={require('../../../../assets/website-images/image-black-text.jpg')}
        blackText
        pageTitle="Page Title">
        Preamble; an introductory and expressionary statement in a document that explains the document's purpose and
        underlying philosophy.
    </HeaderWithImage>
);

export default BlackText;