import React, { useState } from 'react';
import { ShoppingCartUpdated } from '../../index';

export default {
  title: 'Component library/Molecules/ShoppingCartUpdated',
  component: ShoppingCartUpdated,
};

export const Default = () => {
  const heading = 'Handlekurv';
  const pricePerMonth = 500;
  const priceUpfront = 500;
  const priceFirstInvoice = 500;
  const delivery = {
    label: 'Fri frakt',
    price: 0,
  };
  const [shouldShowCart, setShouldShowCart] = useState(false);

  return (
    <ShoppingCartUpdated
      heading={heading}
      cartItems={[]}
      delivery={delivery}
      totalPriceFirstInvoice={priceFirstInvoice}
      totalPriceMonthly={pricePerMonth}
      totalPriceUpfront={priceUpfront}
      onChangeQuantity={() => {}}
      onRemoveItem={() => {}}
      formatPrice={(price: any) => `${price},-`}
      shouldShowCart={shouldShowCart}
      setShouldShowCart={setShouldShowCart}
      isAnyCartItemsQuantityModifiable
    />
  );
};

export const UpfrontWithoutMVA = () => {
  const heading = 'Handlekurv';
  const pricePerMonth = 500;
  const priceUpfront = 500;
  const priceFirstInvoice = 500;
  const delivery = {
    label: 'Bedriftspakken',
    price: 0,
  };
  const [shouldShowCart, setShouldShowCart] = useState(false);

  return (
    <ShoppingCartUpdated
      heading={heading}
      cartItems={[]}
      delivery={delivery}
      totalPriceFirstInvoice={priceFirstInvoice}
      totalPriceMonthly={pricePerMonth}
      totalPriceUpfront={priceUpfront}
      totalVAT={150}
      totalPriceWithoutVAT={350}
      onChangeQuantity={() => {}}
      onRemoveItem={() => {}}
      formatPrice={(price: any) => `${price},-`}
      shouldShowCart={shouldShowCart}
      setShouldShowCart={setShouldShowCart}
      isAnyCartItemsQuantityModifiable
    />
  );
};
