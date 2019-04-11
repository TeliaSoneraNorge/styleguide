import React from 'react';
import { HardwareProduct } from 'component-lib';

const product = {
    campaign: {
        text: 'Fri frakt',
        backgroundColor: '#000000',
        color: '#ffffff'
    },
    url: '#',
    image: require('../../../../assets/website-images/iphone-x-silver-front.png'),
    name: 'Apple iPhone X',
    priceDescription: 'Månedspris fra',
    price: 489,
    priceDisclaimerLine1: 'm/SVITSJ i 24 md. 11736,-',
    priceDisclaimerLine2: 'Abo u/binding kommer i tillegg'
};

const DefaultHardwareProduct = () => (
    <HardwareProduct {...product} />
);

export default DefaultHardwareProduct;