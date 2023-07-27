import React from 'react';
import { Carousel } from './Carousel';

export default {
  title: 'Component library/Molecules/Carousel',
  component: Carousel,
};

const imageUrl = 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg';

const carouselItems = [
  {
    brand: 'Apple',
    name: 'Phone',
    image: { url: imageUrl },
    is5G: false,
  },
  {
    brand: 'Samsung',
    name: 'Phone 2',
    image: { url: imageUrl },
    is5G: true,
  },
  {
    brand: 'Xiaomi',
    name: 'Phone 3',
    image: { url: imageUrl },
    is5G: false,
  },
  {
    brand: 'Logitech',
    name: 'Phone 4',
    image: { url: imageUrl },
    is5G: true,
  },
  {
    brand: 'Apple',
    name: 'Phone 5',
    image: { url: imageUrl },
    is5G: false,
  },
  {
    brand: 'Apple',
    name: 'Phone 6',
    image: { url: imageUrl },
    is5G: true,
  },
];

export const DefaultCarousel = () => {
  return <Carousel items={carouselItems} />;
};

export const FewItemsCarousel = () => {
  return <Carousel items={carouselItems.slice(0, 2)} />;
};
