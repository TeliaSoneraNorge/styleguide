import React, { useState } from 'react';
import { SlidingShoppingCartUpdated, Menu } from '../../index';
import img from '../../stories/sampleImages';

export default {
  title: 'Component library/Organisms/SlidingShoppingCartUpdated',
  component: SlidingShoppingCartUpdated,
};

const menuLinks = [
  {
    heading: { text: 'Privat', url: '#' },
    links: [
      {
        text: 'Nettbutikk',
        subLinks: [
          { text: 'Mobiltelefoner', url: '#' },
          { text: 'Smartklokker', url: '#' },
          { text: 'Nettbrett', url: '#' },
          { text: 'Tilbehør', url: '#' },
        ],
      },
      { text: 'Mobilabonnement', url: '#' },
      { text: 'Mobilt bredbånd', url: '#' },
      { text: 'Dekning', url: '#' },
      { text: 'Hjelp', url: '#' },
    ],
  },
  {
    heading: { text: 'Bedrift', url: '#' },
    links: [
      { text: 'Tjenester', url: '#' },
      { text: 'Digitalisering', url: '#' },
      { text: 'Nettbutikk', url: '#' },
      { text: 'Kundeservice', url: '#' },
    ],
  },
];

export const Default = () => {
  const delivery = {
    label: 'Fri frakt',
    price: 0,
  };
  const priceDisclaimer =
    '<p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>';

  const priceDetails = [
    { label: 'Delbetaling telefon 12 md.', value: '1583,-/md.' },
    { label: 'Mobilabonnement 8 GB', value: '329,-/md.' },
  ];
  const buttons = [
    { kind: 'voca-normal', label: 'Velg abonnement', icon: 'sim-card' },
    { kind: 'voca-inverted', label: 'Fortsett å handle' },
  ];
  const [shouldShowCart, setShouldShowCart] = useState(false);

  return (
    <>
      <Menu
        loginUrl="#Menu"
        logoUrl="#"
        logoTitle="Telia logo"
        activeIndex={0}
        activeLinkIndex={-1}
        menuLinks={menuLinks}
        logoImageDesktopPath={img.logo}
        logoImageInverseDesktopPath={img.logoInverted}
        onSearchSubmit={() => {}}
        searchLabel="Fyll inn det du skal søke på"
        searchButtonLabel="Søk"
        searchButtonAbortText="Lukk"
        mobileMenuCloseButtonLabel="Lukk"
        lockBodyOnMenuOpen
        onCartClick={() => setShouldShowCart(!shouldShowCart)}
        numberOfItemsInCart={3}
      />
      <SlidingShoppingCartUpdated
        heading="Din handlekurv (2)"
        cartItems={[]}
        delivery={delivery}
        totalPriceMonthly={500}
        totalPriceUpfront={300}
        monthlyPriceDetails={priceDetails}
        monthlyPriceDisclaimer={priceDisclaimer}
        totalPriceFirstInvoice={0}
        onChangeQuantity={() => {}}
        onRemoveItem={() => {}}
        formatPrice={(price: any) => `${price},-`}
        shouldShowCart={shouldShowCart}
        setShouldShowCart={setShouldShowCart}
        buttons={buttons}
      />
    </>
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
    <>
      <Menu
        loginUrl="#Menu"
        logoUrl="#"
        logoTitle="Telia logo"
        activeIndex={0}
        activeLinkIndex={-1}
        menuLinks={menuLinks}
        logoImageDesktopPath={img.logo}
        logoImageInverseDesktopPath={img.logoInverted}
        onSearchSubmit={() => {}}
        searchLabel="Fyll inn det du skal søke på"
        searchButtonLabel="Søk"
        searchButtonAbortText="Lukk"
        mobileMenuCloseButtonLabel="Lukk"
        lockBodyOnMenuOpen
        onCartClick={() => setShouldShowCart(!shouldShowCart)}
        numberOfItemsInCart={3}
      />
      <SlidingShoppingCartUpdated
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
        formatPrice={(price) => `${price},-`}
        shouldShowCart={shouldShowCart}
        setShouldShowCart={setShouldShowCart}
        isAnyCartItemsQuantityModifiable
      />
    </>
  );
};
