import React from 'react';
import ProductTabs from './ProductTabs';

export default {
  title: 'Component library/Atoms/ProductTabs',
  component: ProductTabs,
};

export const Default = () => {
  return (
    <ProductTabs
      leftTabTitle="Enkeltabonnement"
      leftTabLink={`#`}
      rightTabTitle="Familieabonnement"
      rightTabLink={`#`}
      selectedTab="left"
    />
  );
};

export const WithDescription = () => {
  return (
    <ProductTabs
      leftTabTitle="Enkeltabonnement"
      leftTabDescription="Velg abonnement"
      leftTabLink={`#`}
      rightTabTitle="Familieabonnement"
      rightTabLink={`#`}
      selectedTab="left"
    />
  );
};
