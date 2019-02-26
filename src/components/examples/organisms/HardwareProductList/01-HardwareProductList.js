import React from 'react';
import { HardwareProductList, HardwareProduct } from '@telia/styleguide';

const products = [{
    campaign: {
        text: 'Fri frakt',
        backgroundColor: '#000000',
        color: '#ffffff'
    },
    url: '#',
    image: '/public/website-images/iphone-x-silver-front.png',
    name: 'Apple iPhone X',
    priceDescription: 'Månedspris fra',
    price: 489,
    priceDisclaimerLine1: 'm/SVITSJ i 24 md. 11736,-'
}, {
    url: '#',
    image: '/public/website-images/iphone-x-silver-front.png',
    name: 'Apple iPhone X',
    priceDescription: 'Månedspris fra',
    price: 489,
    priceDisclaimerLine1: 'm/SVITSJ i 24 md. 11736,-',
    priceDisclaimerLine2: 'Abo u/binding kommer i tillegg'
}, {
    url: '#',
    image: '/public/website-images/iphone-x-silver-front.png',
    name: 'Apple iPhone X',
    priceDescription: 'Månedspris fra',
    price: 489,
    priceDisclaimerLine1: 'm/SVITSJ i 24 md. 11736,-'
}, {
    campaign: {
        text: 'Fri frakt',
        backgroundColor: '#000000',
        color: '#ffffff'
    },
    url: '#',
    image: '/public/website-images/iphone-x-silver-front.png',
    name: 'Apple iPhone X',
    priceDescription: 'Månedspris fra',
    price: 489,
    priceDisclaimerLine1: 'm/SVITSJ i 24 md. 11736,-',
    priceDisclaimerLine2: 'Abo u/binding kommer i tillegg'
}];

const FourHardwareProducts = () => (
    <section className="box-grid">
        <HardwareProduct className="box" {...products[0]} />
        <HardwareProduct className="box" {...products[1]} />
        <HardwareProduct className="box" {...products[2]} />
        <HardwareProduct className="box" {...products[3]} />
    </section>
);

export default FourHardwareProducts;