import React from 'react';
import { ProductList } from '../../index';

export default {
  title: 'Component library|Molecules/ProductList',
  component: ProductList,
};

export const Default = () => {

  const items = [
    {
      iconName: 'ico_databoost',
      iconColor: 'purple',
      title: '1 time for 399,-',
      description: '31 dager',
      href: '#',
    },
    {
      iconName: 'ico_subscription',
      iconColor: 'purple',
      title: '6GB for 399,-',
      href: 'https://telia.no',
    },
    {
      iconName: 'ico_money',
      iconColor: 'purple',
      title: '5GB for 299,-',
      description: '31 dager',
    },
    {
      iconName: 'ico_subscription',
      iconColor: 'purple',
      title: 'Kronepåfyll 50,-',
    },
  ];

  return (
    <ProductList items={items} />
  )
};

export const PromotionProductList = () => {

  const items = [
    {
      iconName: 'ico_subscription',
      iconColor: 'purple',
      title: 'Kronepåfyll 50,-',
      style: 'promo',
    },
  ];

  return (
    <ProductList items={items} />
  )
};