import React from 'react';
import { Carousel } from './Carousel';

export default {
  title: 'Component library/Molecules/Carousel',
  component: Carousel,
};

const imageUrl =
  'https://images.ctfassets.net/iz15t1lxx44v/2bAmprX6JHTyR8nWQol8ld/b603e6091b1ec808428bdb79a8c3cc02/iPhone_13_Blue_Pure_Back_iPhone_13_Blue_Pure_Front_2-up_Screen__USEN.png';

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
