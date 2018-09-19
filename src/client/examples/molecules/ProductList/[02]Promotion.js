import React from 'react';
import { ProductList } from '@telia/styleguide';

const items = [{
    iconName: 'ico_subscription',
    iconColor: 'purple',
    title: 'KRONEPÅFYLL 50,-',
    style: 'promo'
}];

const PromotionProductList = () => (
    <ProductList items={items} />
);

export default PromotionProductList;