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
    label: 'Levering',
    value: 'Fri frakt',
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
    value: 'Fri frakt',
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

export const WithMonthlyPriceDisclaimer = () => {
  const delivery = {
    label: 'Bedriftspakken',
    value: 'Fri frakt',
  };
  const [shouldShowCart, setShouldShowCart] = useState(false);
  const priceDisclaimer =
    '<p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>';

  return (
    <ShoppingCartUpdated
      heading="Handlekurv"
      cartItems={[]}
      delivery={delivery}
      totalPriceMonthly={500}
      totalPriceUpfront={300}
      monthlyPriceDisclaimer={priceDisclaimer}
      onChangeQuantity={() => {}}
      onRemoveItem={() => {}}
      formatPrice={(price: any) => `${price},-`}
      shouldShowCart={shouldShowCart}
      setShouldShowCart={setShouldShowCart}
    />
  );
};

export const WithMonthlyPriceDetails = () => {
  const delivery = {
    label: 'Bedriftspakken',
    value: 'Fri frakt',
  };
  const [shouldShowCart, setShouldShowCart] = useState(false);
  const priceDisclaimer =
    '<p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>';

  const priceDetails = [
    { label: 'Delbetaling telefon 12 md.', value: '1583,-/md.' },
    { label: 'Mobilabonnement 8 GB', value: '329,-/md.' },
  ];

  return (
    <ShoppingCartUpdated
      heading="Handlekurv"
      cartItems={[]}
      delivery={delivery}
      totalPriceMonthly={500}
      totalPriceUpfront={300}
      monthlyPriceDetails={priceDetails}
      monthlyPriceDisclaimer={priceDisclaimer}
      onChangeQuantity={() => {}}
      onRemoveItem={() => {}}
      formatPrice={(price: any) => `${price},-`}
      shouldShowCart={shouldShowCart}
      setShouldShowCart={setShouldShowCart}
    />
  );
};

export const WithoutDelivery = () => {
  const [shouldShowCart, setShouldShowCart] = useState(false);

  return (
    <ShoppingCartUpdated
      heading="Handlekurv"
      cartItems={[]}
      totalPriceMonthly={500}
      totalPriceUpfront={300}
      onChangeQuantity={() => {}}
      onRemoveItem={() => {}}
      formatPrice={(price: any) => `${price},-`}
      shouldShowCart={shouldShowCart}
      setShouldShowCart={setShouldShowCart}
    />
  );
};

export const WithContinueButtons = () => {
  const delivery = {
    label: 'Bedriftspakken',
    value: 'Fri frakt',
  };
  const [shouldShowCart, setShouldShowCart] = useState(false);
  const buttons = [
    { kind: 'voca-normal', label: 'Velg abonnement', icon: 'sim-card' },
    { kind: 'voca-inverted', label: 'Fortsett å handle' },
  ];

  return (
    <ShoppingCartUpdated
      heading="Handlekurv"
      cartItems={[]}
      delivery={delivery}
      totalPriceMonthly={500}
      totalPriceUpfront={300}
      onChangeQuantity={() => {}}
      onRemoveItem={() => {}}
      formatPrice={(price: any) => `${price},-`}
      shouldShowCart={shouldShowCart}
      setShouldShowCart={setShouldShowCart}
      buttons={buttons}
    />
  );
};
