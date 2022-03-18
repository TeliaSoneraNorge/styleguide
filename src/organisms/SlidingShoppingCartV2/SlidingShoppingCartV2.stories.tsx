import React, { useState } from 'react';
import { SlidingShoppingCartV2, ShoppingCartV2 as ShoppingCart, Menu } from '../../index';
import { ICartItem } from '../../molecules/ShoppingCartV2/types';
import img from '../../stories/sampleImages';

export default {
  title: 'Component library/Organisms/SlidingShoppingCartV2',
  component: SlidingShoppingCartV2,
  parameters: {
    layout: 'fullscreen',
  },
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
  const heading = 'Handlekurv';
  const pricePerMonth = 500;
  const priceUpfront = 500;
  const priceFirstInvoice = 500;
  const priceDisclaimer =
    '<p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>';

  const priceDetails = [
    { label: 'Delbetaling telefon 12 md.', value: '1583,-/md.' },
    { label: 'Mobilabonnement 8 GB', value: '329,-/md.' },
  ];
  const delivery = {
    label: 'Bedriftspakken',
    value: 'Fri frakt',
  };
  const [shouldShowCart, setShouldShowCart] = useState(false);

  const leaseContent: ICartItem[] = [
    {
      type: 'HANDSET',
      subtype: '',
      href: '#',
      id: '9076528',
      bundleId: 'e16132',
      brand: 'Samsung',
      brandSlug: 'samsung',
      model: 'Galaxy S20 Ultra 5G 128 GB',
      modelSlug: 'galaxy-s20-ultra',
      subtitle: '',
      code: '',
      color: 'Grå',
      modelSize: '256 GB',
      lineThrough: '',
      image: {
        url:
          '//images.ctfassets.net/iz15t1lxx44v/6wL89AOWs6Z7dMISvz6Ta1/0eee85d33d7b20632d706ce51df0836e/samsung-galaxy-s20-ultra-5g-cosmic-gray-2.png',
      },
      name: 'Samsung Galaxy S20 Ultra 5G',
      quantity: {
        modifiable: false,
        removable: true,
        value: 1,
      },
      price: {
        upfront: 10799,
        monthly: 799,
        originalSalesPrice: 15790,
      },
      discount: {
        value: {
          upfront: 0,
        },
        description: '',
      },
      leaseMonths: '12',
      isReSwitch: false,
      isWebDeal: false,
    },
  ];

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
      <SlidingShoppingCartV2 shouldShowCart={shouldShowCart} setShouldShowCart={setShouldShowCart}>
        <ShoppingCart
          heading={heading}
          cartItems={leaseContent}
          delivery={delivery}
          totalPriceFirstInvoice={priceFirstInvoice}
          totalPriceMonthly={pricePerMonth}
          monthlyPriceDetails={priceDetails}
          monthlyPriceDisclaimer={priceDisclaimer}
          disclaimer={'Total telefonpris med SVITSJ i 24 md.: 16 056,-'}
          totalPriceUpfront={priceUpfront}
          totalVAT={150}
          totalPriceWithoutVAT={350}
          onChangeQuantity={() => {}}
          onRemoveItem={() => {}}
          formatPrice={(price: any) => `${price},-`}
          isAnyCartItemsQuantityModifiable
        />
      </SlidingShoppingCartV2>
    </>
  );
};
