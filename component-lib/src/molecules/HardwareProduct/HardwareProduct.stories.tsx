import React from 'react';
import { HardwareProduct } from '../../index';
import img from '../../stories/sampleImages';

export default {
  title: 'Component library|Molecules/HardwareProduct',
  component: HardwareProduct,
};

export const Default = () => {
  const product = {
    campaign: {
      text: 'Fri frakt',
      backgroundColor: '#000000',
      color: '#ffffff',
    },
    url: '#',
    image: img.iphoneXSilverFront,
    name: 'Apple iPhone X',
    priceDescription: 'Månedspris fra',
    price: 489,
    priceDisclaimerLine1: 'm/SVITSJ i 24 md. 11736,-',
    priceDisclaimerLine2: 'Abo u/binding kommer i tillegg',
  };

  return (
    <HardwareProduct {...product} />
  )
};