import React from 'react';
import { ProductList } from '@telia/styleguide';

const items = [
    {
        iconName: 'ico_databoost_purple',
        iconColor: "purple",
        title: '1 TIME FOR 399,-',
        description: '31 dager',
        href: '#',
    },
    {
        iconName: 'ico_subscription_purple',
        iconColor: "purple",
        title: '6GB FOR 399,-',
        href: 'https://telia.no',
    },
    {
        iconName: 'ico_money_purple',
        iconColor: "purple",
        title: '6GB FOR 399,-',
        description: '31 dager',
    },
    {
        iconName: 'ico_subscription_purple',
        iconColor: "purple",
        title: 'KRONEPÅFYLL 50,-',
    }
];

const DefaultProductList = () => (
    <ProductList
        items={items} />
);

export default DefaultProductList;