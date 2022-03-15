import React, { useState } from 'react';
import { ShoppingCartUpdated } from '../../index';
import { text, number, select } from '@storybook/addon-knobs';
import Container from '../../atoms/Container/Container';

export default {
  title: 'Component library/Molecules/ShoppingCartUpdated',
  component: ShoppingCartUpdated,
};

const style = {
  backgroundColor: '#f2f2f2',
  display: 'flex',
  justifyContent: 'center',
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
export const leaseHandset = () => {
  const heading = 'Handlekurv';
  const pricePerMonth = 500;
  const priceUpfront = 500;
  const priceFirstInvoice = 500;
  const delivery = {
    label: 'Bedriftspakken',
    price: 0,
  };

  const buttons = [
    { kind: 'voca-normal', label: 'Velg abonnement', icon: 'sim-card' },
    { kind: 'voca-inverted', label: 'Fortsett å handle' },
  ];

  const containerSize = select('Size of container', ['small', 'medium', 'large'], 'medium');

  const [shouldShowCart, setShouldShowCart] = useState(false);

  const leaseContent = [
    {
      type: 'HANDSET',
      subtype: '',
      id: '9076528',
      bundleId: 'e16132',
      brand: 'Samsung',
      brandSlug: 'samsung',
      model: 'Galaxy S20 Ultra 5G 128 GB',
      modelSlug: 'galaxy-s20-ultra',
      subtitle: 'Telia SVITSJ i 24 md.',
      href: '#',
      code: '',
      color: 'Grå',
      modelSize: '256 GB',
      lineThrough: '1624,-/md.',
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
        monthly: 0,
        originalSalesPrice: 15790,
      },
      discount: {
        value: {
          upfront: 0,
        },
        description: '',
        leaseDiscount: {
          name: 'Telefonrabatt, 12 md. binding og TeliaX',
          value: 2121,
        },
      },
      leaseMonths: 0,
      isReSwitch: false,
      isWebDeal: false,
      items: [
        {
          type: 'SUBSCRIPTION_DRAFT',
          id: 'SMART_X.TLF12PLEAS',
          bundleId: 'e16132',
          subtitle: 'Mobilabonnement',
          items: [
            {
              type: 'SIM',
              id: '9054990',
              image: {
                icon: 'sim-card',
              },
              subtitle: 'Hovedsim',
              name: 'SIM-kort',
              price: {
                upfront: 0,
              },
              quantity: {
                modifiable: false,
                removable: false,
                value: 2,
              },
              indent: true,
            },
            {
              type: 'SERVICE',
              id: 'INSURANCE_SWITCH_2+INSURLS2V',
              subtitle: 'Kostnadsfritt i 2 md.',
              image: {
                icon: 'product-skjermforsikring',
              },
              name: 'Plussforsikring',
              price: {
                upfront: 0,
                monthly: 0,
              },
              quantity: {
                modifiable: false,
                removable: true,
                value: 1,
              },
            },
          ],
          name: 'Telia X med telefon og 12 md. avtaletid',
          quantity: {
            modifiable: false,
            removable: false,
            value: 1,
          },
          price: {
            monthly: 549,
          },
          image: {
            icon: 'sim-card',
          },
          discount: {
            hasGroupDiscount: false,
            value: {
              monthly: 0,
            },
          },
        },
      ],
    },
    {
      type: 'ACCESSORY',
      subtype: 'HEADSET',
      id: '9072690',
      bundleId: '09cd8b',
      brand: 'Apple',
      brandSlug: 'apple',
      model: 'AirPods with Wireless Charging Case',
      modelSlug: '',
      color: 'Hvit',
      image: {
        url:
          '//images.ctfassets.net/iz15t1lxx44v/ymnos91vr1V8DtKVMVh9i/85bed5acc0b1ddf2635747b50e770705/airpods-wireless-charge-case-201903.png',
      },
      name: 'Apple AirPods with Wireless Charging Case',
      quantity: {
        modifiable: true,
        removable: true,
        value: 3,
      },
      price: {
        upfront: 1999,
        originalSalesPrice: 1999,
      },
      discount: {
        value: {
          upfront: 1000,
        },
        description: '',
      },
      leaseMonths: null,
      isReSwitch: false,
      isWebDeal: true,
    },
  ];

  return (
    <Container style={style} size={containerSize}>
      <ShoppingCartUpdated
        heading={heading}
        cartItems={leaseContent}
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
        buttons={buttons}
      />
    </Container>
  );
};

export const subscriptionsOnly = () => {
  const heading = 'Handlekurv';
  const pricePerMonth = 500;
  const priceUpfront = 500;
  const priceFirstInvoice = 500;
  const delivery = {
    label: 'Bedriftspakken',
    price: 0,
  };

  const buttons = [
    { kind: 'voca-normal', label: 'Velg abonnement', icon: 'sim-card' },
    { kind: 'voca-inverted', label: 'Fortsett å handle' },
  ];

  const containerSize = select('Size of container', ['small', 'medium', 'large'], 'medium');

  const [shouldShowCart, setShouldShowCart] = useState(false);

  const groupContent = [
    {
      type: 'SUBSCRIPTION',
      id: 'SMART_X.REGULAR',
      bundleId: '29166a',
      items: [],
      name: 'Telia X',
      quantity: {
        modifiable: false,
        removable: false,
        value: 1,
      },
      price: {
        monthly: 579,
      },
      image: {
        icon: 'sim-card',
      },
      subtitle: 'Nummer: 413 18 854',
      indent: true,
      discount: {
        hasGroupDiscount: true,
        value: {
          monthly: 135,
        },
      },
    },
    {
      type: 'SUBSCRIPTION',
      id: 'SMART_X.REGULAR',
      bundleId: '2b629a',
      items: [],
      name: 'Telia X',
      quantity: {
        modifiable: false,
        removable: false,
        value: 1,
      },
      price: {
        monthly: 579,
      },
      image: {
        icon: 'sim-card',
      },
      subtitle: 'Nummer: 413 20 853',
      indent: true,
      discount: {
        hasGroupDiscount: true,
        value: {
          monthly: 135,
        },
      },
    },
    {
      type: 'SIM',
      id: '9054990',
      subtitle: 'Hovedsim',
      image: {
        icon: 'sim-card',
      },
      name: 'SIM-kort',
      price: {
        upfront: 0,
      },
      quantity: {
        modifiable: false,
        removable: false,
        value: 2,
      },
      indent: true,
    },
  ];

  return (
    <Container style={style} size={containerSize}>
      <ShoppingCartUpdated
        heading={heading}
        cartItems={groupContent}
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
        buttons={buttons}
      />
    </Container>
  );
};
