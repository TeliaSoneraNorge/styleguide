import React from 'react';
import { ProductList } from '@telia/styleguide';

const items = [
    {
        iconName: 'ico_databoost',
        iconColor: 'purple',
        title: '1 time for 399,-',
        description: '31 dager',
        href: '#'
    },
    {
        iconName: 'ico_subscription',
        iconColor: 'purple',
        title: '6GB for 399,-',
        href: 'https://telia.no'
    },
    {
        iconName: 'ico_money',
        iconColor: 'purple',
        title: '6GB for 399,-',
        description: '31 dager'
    },
    {
        iconName: 'ico_subscription',
        iconColor: 'purple',
        title: 'Kronepåfyll 50,-'
    }
];

const DefaultProductList = () => (
    <ProductList items={items} />
);

export default DefaultProductList;