import React from 'react';
import { ShoppingCartV2 } from '../../index';
import { select } from '@storybook/addon-knobs';
import Container from '../../atoms/Container/Container';
import Button from '../../atoms/Button/Button';
import { ICartItem } from './types';

export default {
  title: 'Component library/Molecules/ShoppingCartV2',
  component: ShoppingCartV2,
  parameters: {
    layout: 'fullscreen',
  },
};

const style = {
  backgroundColor: '#f2f2f2',
  display: 'flex',
  justifyContent: 'center',
};

const ContinueButtons = (
  <>
    <Button kind="voca-normal" text="Velg abonnement" icon="sim-card" />
    <Button kind="voca-inverted" text="Forsett å handle" />
  </>
);

export const Default = () => {
  const heading = 'Handlekurv';
  const pricePerMonth = 500;
  const priceUpfront = 500;
  const priceFirstInvoice = 500;
  const delivery = {
    label: 'Bedriftspakken',
    value: 'Fri frakt',
  };

  const disclaimer = 'Total telefonpris med SVITSJ i 24 md.: 16 056,-';

  const containerSize = select('Size of container', ['small', 'medium', 'large'], 'medium');
  const leaseContent: ICartItem[] = [
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
        monthly: 0,
        originalSalesPrice: 15790,
      },
      discount: {
        value: {
          upfront: 0,
        },
        description: '',
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
    {
      type: 'VOUCHER',
      id: 'VOUCHER',
      image: {
        icon: 'info',
      },
      name: 'Verdikode/gavekort',
      quantity: {
        removable: true,
        value: 1,
      },
      price: {
        upfront: -500,
      },
      leaseMonths: null,
    },
  ];

  return (
    <Container style={style} size={containerSize}>
      <ShoppingCartV2
        heading={heading}
        cartItems={leaseContent}
        delivery={delivery}
        disclaimer={disclaimer}
        totalPriceFirstInvoice={priceFirstInvoice}
        totalPriceMonthly={pricePerMonth}
        totalPriceUpfront={priceUpfront}
        totalVAT={150}
        totalPriceWithoutVAT={350}
        onChangeQuantity={() => {}}
        onRemoveItem={() => {}}
        formatPrice={(price: any) => `${price},-`}
        isAnyCartItemsQuantityModifiable
        isAllowedToDelete
        continueSection={ContinueButtons}
      />
    </Container>
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

  return (
    <ShoppingCartV2
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
      isAnyCartItemsQuantityModifiable
      continueSection={ContinueButtons}
    />
  );
};

export const WithMonthlyPriceDisclaimer = () => {
  const delivery = {
    label: 'Bedriftspakken',
    value: 'Fri frakt',
  };
  const priceDisclaimer =
    '<p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>';

  return (
    <ShoppingCartV2
      heading="Handlekurv"
      cartItems={[]}
      delivery={delivery}
      totalPriceMonthly={500}
      totalPriceUpfront={300}
      monthlyPriceDisclaimer={priceDisclaimer}
      onChangeQuantity={() => {}}
      onRemoveItem={() => {}}
      formatPrice={(price: any) => `${price},-`}
    />
  );
};

export const WithMonthlyPriceDetails = () => {
  const delivery = {
    label: 'Bedriftspakken',
    value: 'Fri frakt',
  };
  const priceDisclaimer =
    '<p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>';

  const priceDetails = [
    { label: 'Delbetaling telefon 12 md.', value: '1583,-/md.' },
    { label: 'Mobilabonnement 8 GB', value: '329,-/md.' },
  ];

  return (
    <ShoppingCartV2
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
    />
  );
};

export const WithoutDelivery = () => {
  return (
    <ShoppingCartV2
      heading="Handlekurv"
      cartItems={[]}
      totalPriceMonthly={500}
      totalPriceUpfront={300}
      onChangeQuantity={() => {}}
      onRemoveItem={() => {}}
      formatPrice={(price: any) => `${price},-`}
    />
  );
};

export const WithContinueButtons = () => {
  const delivery = {
    label: 'Bedriftspakken',
    value: 'Fri frakt',
  };

  return (
    <ShoppingCartV2
      heading="Handlekurv"
      cartItems={[]}
      delivery={delivery}
      totalPriceMonthly={500}
      totalPriceUpfront={300}
      onChangeQuantity={() => {}}
      onRemoveItem={() => {}}
      formatPrice={(price: any) => `${price},-`}
      continueSection={ContinueButtons}
    />
  );
};

export const WithFirstInvoice = () => {
  const delivery = {
    label: 'Levering',
    value: 'Fri frakt',
  };

  return (
    <ShoppingCartV2
      heading="Handlekurv"
      cartItems={[]}
      delivery={delivery}
      totalPriceMonthly={500}
      totalPriceFirstInvoice={300}
      onChangeQuantity={() => {}}
      onRemoveItem={() => {}}
      formatPrice={(price: any) => `${price},-`}
      continueSection={ContinueButtons}
    />
  );
};

export const subscriptionsOnly = () => {
  const heading = 'Handlekurv';
  const pricePerMonth = 500;
  const priceUpfront = 500;
  const priceFirstInvoice = 500;
  const delivery = {
    label: 'Bedriftspakken',
    value: 'Fri frakt',
  };

  const containerSize = select('Size of container', ['small', 'medium', 'large'], 'medium');
  const groupContent: ICartItem[] = [
    {
      type: 'SUBSCRIPTION',
      id: 'SMART_X.REGULAR',
      bundleId: '29166a',
      items: [],
      name: 'Telia X',
      href: '#',
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
      discount: {
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
      discount: {
        value: {
          monthly: 135,
        },
      },
    },
    {
      type: 'SUBSCRIPTION_DRAFT',
      id: 'TELIA_MOBIL_06GB.REGULAR',
      bundleId: 'ac9f7a',
      items: [],
      name: '16 GB',
      lineThrough: '8 GB',
      quantity: {
        modifiable: false,
        removable: false,
        value: 1,
      },
      price: {
        monthly: 329,
      },
      image: {
        icon: 'sim-card',
      },
      subtitle: 'Nummer: 413 20 853',
      discount: {
        value: {
          monthly: 135,
        },
      },
    },
    {
      type: 'SPECIALPRODUCT',
      id: '39961249',
      bundleId: 'f108e0',
      image: {
        url: 'https://www.telia.no/shop/assets/img-static/other/missing_image.svg',
      },
      name: 'Kontant Startpakke',
      quantity: {
        modifiable: false,
        removable: false,
        value: 1,
      },
      price: {
        upfront: 99,
        originalSalesPrice: 99,
        originalSalesPriceWithoutVAT: 79.2,
      },
      leaseMonths: null,
      items: [
        {
          type: 'SUBSCRIPTION_DRAFT',
          id: 'KONTANT_KOMPLETT.REGULAR',
          bundleId: 'f108e0',
          items: [],
          name: 'Kontant Startpakke',
          quantity: {
            modifiable: false,
            removable: false,
            value: 1,
          },
          price: {},
          image: {
            icon: 'sim-card',
          },
          subtitle: 'Mobilabonnement',
        },
      ],
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
        value: 3,
      },
    },
  ];

  return (
    <Container style={style} size={containerSize}>
      <ShoppingCartV2
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
        isAllowedToDelete={true}
        formatPrice={(price: any) => `${price},-`}
        isAnyCartItemsQuantityModifiable
        continueSection={ContinueButtons}
      />
    </Container>
  );
};

export const handsetBeforeSubscriptionAdded = () => {
  const heading = 'Handlekurv';
  const pricePerMonth = 500;
  const priceUpfront = 500;
  const priceFirstInvoice = 500;
  const delivery = {
    label: 'Bedriftspakken',
    value: 'Fri frakt',
  };

  const containerSize = select('Size of container', ['small', 'medium', 'large'], 'medium');
  const groupContent: ICartItem[] = [
    {
      type: 'HANDSET',
      subtype: '',
      id: '9076528',
      bundleId: 'e16132',
      brand: 'Samsung',
      brandSlug: 'samsung',
      model: 'Galaxy S20 Ultra 5G 128 GB',
      modelSlug: 'galaxy-s20-ultra',
      subtitle: 'Abonnement velges neste side',
      href: '#',
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
        monthly: 1500,
        originalSalesPrice: 15790,
      },
      discount: {
        value: {
          upfront: 0,
        },
        description: '',
      },
      leaseMonths: 0,
      isReSwitch: false,
      isWebDeal: false,
      items: [],
    },
  ];

  return (
    <Container style={style} size={containerSize}>
      <ShoppingCartV2
        heading={heading}
        cartItems={groupContent}
        delivery={delivery}
        totalPriceFirstInvoice={priceFirstInvoice}
        totalPriceMonthly={pricePerMonth}
        totalPriceUpfront={priceUpfront}
        totalVAT={150}
        totalPriceWithoutVAT={350}
        onChangeQuantity={() => {}}
        isAllowedToDelete={true}
        onRemoveItem={() => {}}
        formatPrice={(price: any) => `${price},-`}
        isAnyCartItemsQuantityModifiable
        continueSection={ContinueButtons}
      />
    </Container>
  );
};

export const mbbAndHW = () => {
  const heading = 'Handlekurv';
  const pricePerMonth = 500;
  const priceUpfront = 500;
  const priceFirstInvoice = 500;
  const delivery = {
    label: 'Bedriftspakken',
    value: 'Fri frakt',
  };

  const continueSection = [
    { kind: 'voca-normal', label: 'Velg abonnement', icon: 'sim-card' },
    { kind: 'voca-inverted', label: 'Fortsett å handle' },
  ];

  const containerSize = select('Size of container', ['small', 'medium', 'large'], 'medium');
  const groupContent: ICartItem[] = [
    {
      type: 'MODEM',
      subtype: 'NEW',
      id: '9071315',
      bundleId: 'a2f7db',
      brand: 'Netgear',
      brandSlug: 'netgear',
      model: 'Nighthawk M1',
      modelSlug: 'nighthawk-m1',
      color: 'Svart',
      image: {
        url:
          '//images.ctfassets.net/iz15t1lxx44v/4uWPDhKd5S2waGwu0qSS0/c4c80178f7f84cfb38c7a44f8fd1247f/MR1100_Front.png',
      },
      name: 'Netgear Nighthawk M1',
      quantity: {
        modifiable: false,
        removable: true,
        value: 1,
      },
      price: {
        upfront: 299,
        originalSalesPrice: 3390,
        originalSalesPriceWithoutVAT: 2712,
      },
      discount: {
        value: {
          upfront: 0,
          monthly: 0,
        },
        description: '',
      },
      leaseMonths: 0,
      isReSwitch: false,
      isWebDeal: false,
      items: [
        {
          type: 'SUBSCRIPTION_DRAFT',
          id: 'MBB4G_500GB_PRIV_3.HW12LEAS',
          bundleId: 'a2f7db',
          items: [],
          name: '500 GB',
          lineThrough: '',
          quantity: {
            modifiable: false,
            removable: true,
            value: 1,
          },
          price: {
            monthly: 999,
          },
          discount: {
            value: {
              upfront: 0,
              monthly: 0,
            },
            description: '',
          },
          image: {
            icon: 'sim-card',
          },
        },
      ],
    },
  ];

  return (
    <Container style={style} size={containerSize}>
      <ShoppingCartV2
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
        isAllowedToDelete={true}
        formatPrice={(price: any) => `${price},-`}
        isAnyCartItemsQuantityModifiable
        continueSection={ContinueButtons}
      />
    </Container>
  );
};

export const accessoryOnly = () => {
  const heading = 'Handlekurv';
  const pricePerMonth = 500;
  const priceUpfront = 500;
  const priceFirstInvoice = 500;
  const delivery = {
    label: 'Bedriftspakken',
    value: 'Fri frakt',
  };

  const containerSize = select('Size of container', ['small', 'medium', 'large'], 'medium');
  const groupContent: ICartItem[] = [
    {
      type: 'ACCESSORY',
      subtype: 'COVER',
      id: '9074806',
      brand: 'Apple',
      brandSlug: 'apple',
      model: 'iPhone 11 Pro Leather Case',
      modelSlug: 'iphone-leather-case',
      color: 'Svart',
      image: {
        url:
          '//images.ctfassets.net/iz15t1lxx44v/vP0E8oTgNofTzGZewDG3J/a0f66d1ec96c561372ac86561a0c53a7/Apple-iPhone-11-Pro-Silver-Leather-Case-Black-Pure-Back-.png',
      },
      name: 'Apple iPhone 11 Pro Leather Case Svart',
      quantity: {
        modifiable: true,
        removable: true,
        value: 1,
      },
      price: {
        upfront: 499,
        originalSalesPrice: 499,
        originalSalesPriceWithoutVAT: 399.2,
      },
      discount: {
        value: {
          upfront: 0,
          monthly: 0,
        },
        description: '',
      },
      leaseMonths: null,
      isReSwitch: false,
      isWebDeal: false,
    },
    {
      type: 'ACCESSORY',
      subtype: 'COVER',
      id: '9076624',
      brand: 'Samsung',
      brandSlug: 'samsung',
      model: 'Smart LED Cover Galaxy S20',
      modelSlug: 'smart-led-cover',
      color: 'Grå',
      image: {
        url:
          '//images.ctfassets.net/iz15t1lxx44v/4pyxsA65uGFwt0NIlj3KmO/c48c5279368525a19e5a5b3b92f35405/ef-kg980c_002_back_black_200123.png',
      },
      name: 'Samsung LED Cover Galaxy S20 Grå',
      quantity: {
        modifiable: true,
        removable: true,
        value: 3,
      },
      price: {
        upfront: 599,
        originalSalesPrice: 599,
        originalSalesPriceWithoutVAT: 479.2,
      },
      discount: {
        value: {
          upfront: 0,
          monthly: 0,
        },
        description: '',
      },
      leaseMonths: null,
      isReSwitch: false,
      isWebDeal: false,
    },
    {
      type: 'ACCESSORY',
      subtype: 'SPEAKER',
      id: '9075536',
      brand: 'Harman Kardon',
      brandSlug: 'harman-kardon',
      model: 'Onyx Studio 6',
      modelSlug: 'onyx-studio',
      color: 'Svart',
      image: {
        url:
          '//images.ctfassets.net/iz15t1lxx44v/6vnEg9rVj4DnaYvZVrIOvl/ddf6d72dbb92c712c06d8b14a3ec1806/OnyxStudio6_Hero_Black_1605X1605.png',
      },
      name: 'Harman Kardon Onyx Studio 6 Svart',
      quantity: {
        modifiable: true,
        removable: true,
        value: 1,
      },
      price: {
        upfront: 3999,
        originalSalesPrice: 3999,
        originalSalesPriceWithoutVAT: 3199.2,
      },
      discount: {
        value: {
          upfront: 0,
          monthly: 0,
        },
        description: '',
      },
      leaseMonths: null,
      isReSwitch: false,
      isWebDeal: false,
    },
  ];

  return (
    <Container style={style} size={containerSize}>
      <ShoppingCartV2
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
        isAllowedToDelete={true}
        formatPrice={(price: any) => `${price},-`}
        isAnyCartItemsQuantityModifiable
        continueSection={ContinueButtons}
      />
    </Container>
  );
};
