import React from 'react';
import { RecommendedProducts } from '@telia/styleguide';

const products = [
    {
        url: '#',
        image: require('../../../../assets/website-images/zens-charger.png'),
        name: 'Zens Single Wireless Charger',
        price: '299',
    },
    {
        url: '#',
        image: require('../../../../assets/website-images/apple-airpods.png'),
        name: 'Apple Airpods',
        price: '1799',
    },
    {
        url: '#',
        image: require('../../../../assets/website-images/urbanista_seattle_headset.png'),
        name: 'Urbanista Seattle BT On-Ear',
        price: '899',
    },
];

const DefaultRecommendedProducts = () => (
    <RecommendedProducts
        mainHeading="Recommended products"
        products={products}
        image={require('../../../../assets/pebble-0.svg')}
        heading="See something you like?"
        text="We have a lot more electric products that you might find interesting."
        buttonText="More products" />
);

export default DefaultRecommendedProducts;