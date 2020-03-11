import React, { useState } from 'react';
import { RecommendedProducts } from '../../index';
import img from '../../stories/sampleImages';

export default {
  title: 'Component library|Molecules/RecommendedProducts',
  component: RecommendedProducts,
};

const products = [
  {
    url: '#',
    image: img.zensCharger,
    name: 'Zens Single Wireless Charger',
    price: '299',
  },
  {
    url: '#',
    image: img.appleAirpods,
    name: 'Apple Airpods',
    price: '1799',
  },
  {
    url: '#',
    image: img.urbanistaSeattleHeadset,
    name: 'Urbanista Seattle BT On-Ear',
    price: '899',
  },
];

export const Default = () => (
  <RecommendedProducts
    mainHeading="Recommended products"
    products={products}
    image=''
    heading="See something you like?"
    text="We have a lot more electric products that you might find interesting."
    buttonText="More products"
  />
);
