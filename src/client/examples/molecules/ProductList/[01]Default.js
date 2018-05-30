import React from 'react';
import { ProductList } from '@telia/styleguide';

const items = [
    {
        icon: 'ico_databoost_purple',
        title: '1 TIME FOR 399,-',
        description: '31 dager',
        href: '#',
    },
    {
        icon: 'ico_subscription_purple',
        title: '6GB FOR 399,-',
        href: 'https://telia.no',
    },
    {
        icon: 'ico_money_purple',
        title: '6GB FOR 399,-',
        description: '31 dager',
    },
    {
        icon: 'ico_subscription_purple',
        title: 'KRONEPÅFYLL 50,-',
    }
];

const DefaultProductList = () => (
    <ProductList
        items={items}
    />
);

export default DefaultProductList;