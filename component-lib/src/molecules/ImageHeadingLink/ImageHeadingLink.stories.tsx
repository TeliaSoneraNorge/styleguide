import React from 'react';
import { ImageHeadingLink } from '../../index';
import img from '../../stories/sampleImages';

export default {
  title: 'Component library/Molecules/ImageHeadingLink',
  component: ImageHeadingLink,
};

export const Default = () => (
  <ImageHeadingLink href="#" src={img.aboPromoBilde} alt="">
    <ImageHeadingLink.Small>Mobil-</ImageHeadingLink.Small>
    Abonnement
  </ImageHeadingLink>
);