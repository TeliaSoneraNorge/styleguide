import React, { useState } from 'react';
import { PriceTable } from '../../index';

export default {
  title: 'Component library|Molecules/PriceTable',
  component: PriceTable,
};

export const Default = () => {
  const productList = [
    { title: 'Abonnement', price: '449,-', subtitles: ['Per mnd'] },
    { title: 'Misc', price: '449,-', subtitles: ['First subtitle', 'Second subtitle'] },
    { title: 'Ruter', price: '499,-' },
  ];
  
  const totalCalculation = { title: 'Minste totalpris', price: '5887,-', subtitles: ['med 12 mnd avtale'] };

  return (
    <PriceTable productListWithPrice={productList} totalTextWithPrice={totalCalculation} />
  )
};

export const AdditionalLine = () => {
  const productList = [
    { title: 'Abonnement', price: '449,-', subtitles: ['Per mnd'] },
    { title: 'Ruter', price: '499,-' },
  ];
  
  const totalCalculation = { title: 'Minste totalpris', price: '5887,-', subtitle: 'med 12 mnd avtale' };
  
  const additionalLine = 'Already paid upfront';
  
  return (
    <PriceTable
      productListWithPrice={productList}
      totalTextWithPrice={totalCalculation}
      additionalLine={additionalLine}
    />
  )
};

export const OriginalPrice = () => {
  const productList = [
    { title: 'Abonnement', price: '449,-', subtitles: ['Per mnd'] },
    { title: 'Ruter', price: '1,-', originalPrice: '2499,-' },
  ];
  
  const totalCalculation = { title: 'Minste totalpris', price: '5389,-', subtitle: 'med 12 mnd avtale' };
  
  return (
    <PriceTable productListWithPrice={productList} totalTextWithPrice={totalCalculation} />
  )
};
