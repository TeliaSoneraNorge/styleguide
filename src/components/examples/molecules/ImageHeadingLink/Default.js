import React from 'react';
import { ImageHeadingLink } from 'component-lib';

const DefaultImageHeadingLink = () => (
    <ImageHeadingLink href="#" src={require('../../../../assets/website-images/abo_promo-bilde.png')} alt="">
        <ImageHeadingLink.Small>Mobil-</ImageHeadingLink.Small>
        Abonnement
    </ImageHeadingLink>
);

export default DefaultImageHeadingLink;