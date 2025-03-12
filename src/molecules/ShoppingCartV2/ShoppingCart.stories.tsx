import React from 'react';
import _ from 'lodash';
import { ShoppingCartV2 } from '../../index';
import Container from '../../atoms/Container/Container';
import Button from '../../atoms/Button/Button';
import { DisclaimerItem, ICartItem } from './types';

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
    },
  ];

  return (
    <Container style={style} size="medium">
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

export const WithMonthlyPriceDetails = () => {
  const delivery = {
    label: 'Bedriftspakken',
    value: 'Fri frakt',
  };
  const paymentTooltip =
    '<p class="paragraph">Delbetaling 12 md. Telefonrabatten varrierer ut fra hvilket abonnement du velger og vil vises på neste side. </p>';

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
      paymentTooltip={paymentTooltip}
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

export const WithHasPaid = () => {
  const delivery = {
    label: 'Levering',
    value: 'Fri frakt',
  };

  const groupContent: ICartItem[] = [
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
      isReSwitch: false,
      isWebDeal: false,
    },
  ];

  return (
    <ShoppingCartV2
      heading="Handlekurv"
      cartItems={groupContent}
      delivery={delivery}
      totalPriceMonthly={500}
      totalPriceUpfront={1000}
      hasPaid={true}
      onChangeQuantity={() => {}}
      onRemoveItem={() => {}}
      formatPrice={(price: any) => `${price},-`}
    />
  );
};

const subscriptionOnlyGroupContent: ICartItem[] = [
  {
    type: 'SUBSCRIPTION',
    id: 'SMART_X.REGULAR',
    bundleId: '29166a',
    items: [],
    name: 'Telia X',
    href: '#',
    quantity: {
      modifiable: false,
      removable: true,
      value: 1,
    },
    price: {
      monthly: 579,
    },
    image: {
      icon: 'sim-card',
    },
    subtitle: ['Uten bindingstid', 'Nummer: 413 18 854'],
    discount: {
      value: {
        monthly: 135,
      },
    },
  },
  {
    type: 'BREAKAGE_FEE',
    id: '',
    items: [],
    name: 'Bruddgebyr',
    href: '#',
    quantity: {
      modifiable: false,
      removable: false,
      value: 1,
    },
    price: {
      firstInvoice: 2049,
    },
    subtitle: ['Ved skifte til nytt abonnement før bindingstidens utløp'],
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
    subtitle: ['Uten bindingstid', 'Nummer: 413 20 853'],
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
    subtitle: ['Uten bindingstid', 'Nummer: 413 20 853'],
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
export const subscriptionsOnly = () => {
  const heading = 'Handlekurv';
  const pricePerMonth = 500;
  const priceUpfront = 500;
  const priceFirstInvoice = 500;
  const delivery = {
    label: 'Bedriftspakken',
    value: 'Fri frakt',
  };

  return (
    <Container style={style} size="medium">
      <ShoppingCartV2
        heading={heading}
        cartItems={subscriptionOnlyGroupContent}
        delivery={delivery}
        totalPriceFirstInvoice={priceFirstInvoice}
        totalPriceMonthly={pricePerMonth}
        totalPriceUpfront={priceUpfront}
        name="Ola Nordmann"
        showFamilyDiscountInfo
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

export const subscriptionsWithDiscount = () => {
  const heading = 'Handlekurv';
  const pricePerMonth = 500;
  const priceUpfront = 500;
  const priceFirstInvoice = 500;
  const delivery = {
    label: 'Bedriftspakken',
    value: 'Fri frakt',
  };

  const groupContent: ICartItem[] = _.set(_.cloneDeep(subscriptionOnlyGroupContent), '[0].discount.types', [
    { id: 'commitment', value: 0, text: 'Dobbel data t.o.m 20.09.24', lozengeStatus: 'warning' },
    { id: 'commitment', value: 150, text: 'Familierabatt', lozengeStatus: 'communication' },
  ]);

  return (
    <Container style={style} size="medium">
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
      isReSwitch: false,
      isWebDeal: false,
      items: [],
    },
  ];

  return (
    <Container style={style} size="medium">
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
    <Container style={style} size="medium">
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

const accessoryGroupContent: ICartItem[] = [
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
    isReSwitch: false,
    isWebDeal: false,
  },
];

export const accessoryOnly = () => {
  const heading = 'Handlekurv';
  const pricePerMonth = 500;
  const priceUpfront = 500;
  const priceFirstInvoice = 500;
  const delivery = {
    label: 'Bedriftspakken',
    value: 'Fri frakt',
  };

  return (
    <Container style={style} size="medium">
      <ShoppingCartV2
        heading={heading}
        cartItems={accessoryGroupContent}
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

export const accessoryOnlyWithProgressBar = () => {
  const heading = 'Handlekurv';
  const priceUpfront = 200;
  const priceFirstInvoice = 0;
  const delivery = {
    label: 'Bedriftspakken',
    value: 'Fri frakt',
    progressBar: {
      min: 0,
      max: 350,
      progress: 200,
    },
  };

  return (
    <Container style={style} size="medium">
      <ShoppingCartV2
        heading={heading}
        cartItems={accessoryGroupContent}
        delivery={delivery}
        totalPriceFirstInvoice={priceFirstInvoice}
        totalPriceUpfront={priceUpfront}
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

export const withSpeechBubble = () => {
  const heading = 'Handlekurv';
  const pricePerMonth = 500;
  const priceUpfront = 500;
  const priceFirstInvoice = 500;
  const delivery = {
    label: 'Bedriftspakken',
    value: 'Fri frakt',
  };

  const disclaimer = 'Total telefonpris med SVITSJ i 24 md.: 16 056,-';

  const leaseContent: ICartItem[] = [
    {
      type: 'HANDSET',
      subtype: 'NEW',
      id: '9107585',
      bundleId: '8c28cd',
      href: 'https://www.telia.no/mobiltelefoner/apple/iphone-se-3rd/64-gb-product-red/',
      brand: 'Apple',
      brandSlug: 'apple',
      model: 'iPhone SE (3rd) 64GB',
      modelSlug: 'iphone-se-3rd',
      modelSize: '64 GB',
      color: 'Product Red',
      image: {
        url:
          '//images.ctfassets.net/iz15t1lxx44v/7jPSwGjrmJegMNTioqDF3Q/dae6444656444adf58e9fffa2cb7279a/iPhone_SE3_ProductRED_PDP_Image_Position-1A__WWEN.png',
      },
      name: 'Apple iPhone SE 5G',
      quantity: {
        modifiable: false,
        removable: false,
        value: 1,
      },
      price: {
        monthly: 221,
        originalSalesPrice: 5290,
        originalSalesPriceWithoutVAT: 4232,
      },
      discount: {
        value: {
          upfront: 0,
          monthly: 52,
        },
        description: '',
        handsetDiscountText: "Telefonrabatt med <br /> Telia X Rask: <span style='color:#008641;'>-1250,-</span>",
      },
      isReSwitch: false,
      isWebDeal: false,
      subtitle: '24 md. rentefri delbetaling',
      items: [
        {
          type: 'SUBSCRIPTION_DRAFT',
          id: 'TELIA_MOBIL_X_RASK.TLF12PLEAS',
          bundleId: '8c28cd',
          href: '/mobilabonnement/ubegrenset-data',
          items: [],
          name: 'Telia X Rask',
          lineThrough: '',
          quantity: {
            modifiable: false,
            removable: false,
            value: 1,
          },
          price: {
            monthly: 549,
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
          subtitle: 'Mobilabonnement',
        },
      ],
    },
  ];

  return (
    <Container style={style} size="medium">
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

export const withFamilyDiscountInfo = () => {
  const heading = 'Handlekurv';
  const pricePerMonth = 500;
  const priceUpfront = 500;
  const priceFirstInvoice = 500;
  const delivery = {
    label: 'Bedriftspakken',
    value: 'Fri frakt',
  };

  const disclaimer = 'Total telefonpris med SVITSJ i 24 md.: 16 056,-';

  const simOnlyContent: ICartItem[] = [
    {
      type: 'SUBSCRIPTION_DRAFT',
      id: 'TELIA_MOBIL_X_UNG.REGULAR',
      bundleId: 'a2c1d8',
      href: '/mobilabonnement/ubegrenset-data-ung',
      items: [],
      name: 'Telia X Ung',
      lineThrough: '',
      quantity: {
        modifiable: false,
        removable: true,
        value: 1,
      },
      price: {
        monthly: 399,
      },
      discount: {
        value: {
          upfront: 0,
          monthly: 0,
        },
        description: '',
        types: [],
      },
      image: {
        icon: 'sim-card',
      },
      subtitle: 'Mobilabonnement',
    },
  ];

  return (
    <Container style={style} size="medium">
      <ShoppingCartV2
        heading={heading}
        cartItems={simOnlyContent}
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
        showFamilyDiscountInfo={true}
      />
    </Container>
  );
};

export const withMultipleDisclaimers = () => {
  const heading = 'Handlekurv';
  const pricePerMonth = 500;
  const priceUpfront = 500;
  const priceFirstInvoice = 500;
  const delivery = {
    label: 'Bedriftspakken',
    value: 'Fri frakt',
  };

  const content: ICartItem[] = [
    {
      type: 'SUBSCRIPTION_DRAFT',
      id: 'TELIA_MOBIL_10GB_02.REGULAR',
      bundleId: '16ea2c',
      href: '/kasse/abonnement',
      items: [],
      name: '20 GB',
      lineThrough: '10 GB',
      quantity: {
        modifiable: false,
        removable: true,
        value: 1,
      },
      price: {
        monthly: 349,
      },
      discount: {
        value: {
          upfront: 0,
          monthly: 30,
        },
        description: '',
        types: [
          {
            id: 'sameGroup',
            value: 30,
            text: 'Familierabatt',
          },
          {
            id: 'hardcoded',
            value: 0,
            text: 'Dobbel data t.o.m 20.09.24',
            lozengeStatus: 'warning',
          },
        ],
      },
      image: {
        icon: 'bar-chart',
      },
      subtitle: ['Uten bindingstid'],
    },
    {
      type: 'HANDSET',
      subtype: 'NEW',
      id: '9120766',
      bundleId: '53d5a1',
      href: 'https://stage.telia.no/mobiltelefoner/google/pixel-8a/128-gb-bay/',
      brand: 'Google',
      brandSlug: 'google',
      model: 'Pixel 8a 128 GB',
      modelSlug: 'pixel-8a',
      modelSize: '128 GB',
      color: 'Bay',
      image: {
        url:
          '//images.ctfassets.net/iz15t1lxx44v/5eM35dNEcpA9pSugQ7zZWY/6416031b2a4178f7065642053f594ce3/Google_Pixel_8a_Bay_1.png',
      },
      name: 'Google Pixel 8a',
      quantity: {
        modifiable: false,
        removable: false,
        value: 1,
      },
      price: {
        monthly: 279,
        originalSalesPrice: 6690,
        originalSalesPriceWithoutVAT: 5352,
      },
      discount: {
        value: {
          upfront: 0,
          monthly: 104,
        },
        description: '',
      },
      isReSwitch: false,
      isWebDeal: false,
      subtitle: ['24 md. rentefri delbetaling', 'Totalt etter 24. md: 4190,-'],
      items: [
        {
          type: 'SUBSCRIPTION_DRAFT',
          id: 'TELIA_X_MAX.TLF12PLEAS',
          bundleId: '53d5a1',
          href: 'https://stage.telia.no/mobiltelefoner/google/pixel-8a/128-gb-bay/?steg=abonnement&cartId=53d5a1',
          items: [],
          name: 'Telia X Max',
          lineThrough: '',
          quantity: {
            modifiable: false,
            removable: false,
            value: 1,
          },
          price: {
            monthly: 579,
          },
          discount: {
            value: {
              upfront: 0,
              monthly: 0,
            },
            description: '',
            types: [],
          },
          image: {
            icon: 'infinite',
          },
          subtitle: ['Med bindingstid: 12 md.'],
        },
      ],
    },
    {
      type: 'ACCESSORY',
      subtype: 'HEADSET',
      id: '9117688',
      bundleId: '2c0c8b',
      href: 'https://stage.telia.no/mobiltilbehor/hodetelefoner/apple/airpods-pro-2nd/airpods-pro-2-gen-usb‑c-hvit/',
      brand: 'Apple',
      brandSlug: 'apple',
      model: 'AirPods Pro (2.gen) USB‑C',
      modelSlug: 'airpods-pro-2nd',
      color: 'Hvit',
      image: {
        url:
          '//images.ctfassets.net/iz15t1lxx44v/7udaFxG1eayWyr1PTfauuT/3381afb500dee1410214cc7e2a109735/AirPods_Pro_2nd-Gen_Hero_Screen__USEN.png',
      },
      name: 'Apple AirPods Pro (2.gen)',
      quantity: {
        modifiable: false,
        removable: true,
        value: 1,
      },
      price: {
        upfront: 2990,
        originalSalesPrice: 2990,
        originalSalesPriceWithoutVAT: 2392,
      },
      discount: {
        value: {
          upfront: 2000,
          monthly: 0,
        },
        description: '',
      },
      isReSwitch: false,
      isWebDeal: false,
      items: [
        {
          type: 'SUBSCRIPTION_DRAFT',
          id: 'TELIA_X_BASIC.COM12LOUDSPEAKER2',
          bundleId: '2c0c8b',
          href:
            'https://stage.telia.no/mobiltilbehor/hodetelefoner/apple/airpods-pro-2nd/airpods-pro-2-gen-usb‑c-hvit/?steg=abonnement&cartId=2c0c8b',
          items: [],
          name: 'Telia X Basis',
          lineThrough: '',
          quantity: {
            modifiable: false,
            removable: false,
            value: 1,
          },
          price: {
            monthly: 479,
          },
          discount: {
            value: {
              upfront: 0,
              monthly: 100,
            },
            description: '',
            types: [
              {
                id: 'sameGroup',
                value: 100,
                text: 'Familierabatt',
              },
            ],
          },
          image: {
            icon: 'infinite',
          },
          subtitle: ['Med bindingstid: 12 md.'],
        },
      ],
    },
    {
      type: 'ACCESSORY',
      subtype: 'COVER',
      id: '9118962',
      href:
        'https://stage.telia.no/mobiltilbehor/deksler/dbramante1928/iceland-ultra-d3o/galaxy-s24-ultra-gjennomsiktig/',
      brand: 'Dbramante1928',
      brandSlug: 'dbramante1928',
      model: 'Iceland Ultra D3O Galaxy S24 Ultra',
      modelSlug: 'iceland-ultra-d3o',
      modelSize: 'Galaxy S24 Ultra',
      color: 'Gjennomsiktig',
      image: {
        url:
          '//images.ctfassets.net/iz15t1lxx44v/5Pqtws7nPmwqXDJZnsZGZH/a1a48b1887da1562bad35839b6731a71/Dbramante_Iceland_Ultra_D3O_Galaxy_S24_Ultra_1.png',
      },
      name: 'Dbramante1928 Iceland Ultra D3O',
      quantity: {
        modifiable: true,
        removable: true,
        value: 1,
      },
      price: {
        upfront: 349,
        originalSalesPrice: 349,
        originalSalesPriceWithoutVAT: 279.2,
      },
      discount: {
        value: {
          upfront: 0,
          monthly: 0,
        },
        description: '',
      },
      isReSwitch: false,
      isWebDeal: false,
    },
    {
      type: 'HANDSET',
      subtype: 'NEW',
      id: '9121273',
      bundleId: '055a0e',
      href: 'https://www.telia.no/mobiltelefoner/sony/xperia-1-vi/256-gb-platinum-silver/',
      brand: 'Sony',
      brandSlug: 'sony',
      model: 'Xperia 1 VI',
      modelSlug: 'xperia-1-vi',
      modelSize: '256 GB',
      color: 'Platinum Silver',
      image: {
        url:
          '//images.ctfassets.net/iz15t1lxx44v/6LKNh7jxSzCDmNq31ipOap/fd3482152b668b760bcb1744ada9076d/Xperia_1_VI_Platinum_Silver_01.png',
      },
      name: 'Sony Xperia 1 VI',
      quantity: {
        modifiable: false,
        removable: false,
        value: 1,
      },
      price: {
        monthly: 699,
        originalSalesPrice: 14990,
        originalSalesPriceWithoutVAT: 11992,
      },
      discount: {
        value: {
          upfront: 0,
          monthly: 0,
        },
        description: '',
      },
      isReSwitch: false,
      isWebDeal: false,
      subtitle: ['Telia Finance SVITSJ i 24 md.', 'Totalt etter 24. md: 16776,-'],
      items: [
        {
          type: 'SUBSCRIPTION_DRAFT',
          id: 'TELIA_MOBIL_05GB.REGULAR',
          bundleId: '055a0e',
          href:
            'https://www.telia.no/mobiltelefoner/sony/xperia-1-vi/256-gb-platinum-silver/?steg=abonnement&cartId=055a0e',
          items: [],
          name: '10 GB',
          lineThrough: '5 GB',
          quantity: {
            modifiable: false,
            removable: false,
            value: 1,
          },
          price: {
            monthly: 299,
          },
          discount: {
            value: {
              upfront: 0,
              monthly: 0,
            },
            description: '',
            types: [
              {
                id: 'hardcoded',
                value: 0,
                text: 'Dobbel data t.o.m 20.09.24',
                lozengeStatus: 'warning',
              },
            ],
          },
          image: {
            icon: 'bar-chart',
          },
          subtitle: ['Uten bindingstid'],
        },
      ],
    },
  ];

  const disclaimers: DisclaimerItem[] = [
    {
      name: 'Google Pixel 8a',
      description: ['Delbetaling i 24 md. – 579,-/md', 'Betale nå - 200,-'],
      total: 4190,
    },
    {
      name: 'Telia X Max mobilabonnement',
      description: 'Bindingstid i 12 md. – 579,-/md',
      total: 6948,
    },
    {
      name: 'Sony Xperia 1 VI',
      description: 'Svitsj i 24 mnd – 699,-/md',
      total: 16776,
    },
    {
      name: '10 GB mobilabonnement',
      description: 'Ingen bindingstid',
      total: 299,
    },
    {
      name: '20 GB mobilabonnement',
      description: 'Ingen bindingstid',
      total: 319,
    },
    {
      name: 'Apple AirPods Pro (2.gen)',
      description: '',
      total: 990,
    },
    {
      name: 'Telia X Basis mobilabonnement',
      description: 'Bindingstid i 12 md. – 379,-/md',
      total: 4548,
    },
    {
      name: 'Dbramante1928 Iceland Ultra D3O',
      description: '',
      total: 349,
    },
  ];

  const handleOnOpenDisclaimer = () => {
    console.log('Track opening disclaimer accordion here');
  };

  return (
    <Container style={style} size="medium">
      <ShoppingCartV2
        heading={heading}
        cartItems={content}
        delivery={delivery}
        disclaimer={disclaimers}
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
        onOpenDisclaimer={handleOnOpenDisclaimer}
      />
    </Container>
  );
};

export const withUniqueDiscount = () => {
  const heading = 'Handlekurv';
  const delivery = {
    value: 'Fri frakt',
  };

  const content: ICartItem[] = [
    {
      type: 'WEARABLE',
      subtype: 'NEW',
      id: '9118118',
      href: 'https://stage.telia.no/smartklokker/google/pixel-watch-2/pixel-watch-2-lte-obsidian/',
      brand: 'Google',
      brandSlug: 'google',
      model: 'Pixel Watch 2 LTE',
      modelSlug: 'pixel-watch-2',
      color: 'Obsidian',
      image: {
        url:
          '//images.ctfassets.net/iz15t1lxx44v/2gi4GxxOyI19g0Kf0LbtAE/adb5ae98c8a636c0c3574f66895e9dca/Pixel_Watch2_Obsidian_1.png',
      },
      name: 'Google Pixel Watch 2',
      quantity: {
        modifiable: false,
        removable: false,
        value: 1,
      },
      price: {
        upfront: 2590,
        upfrontWithoutVAT: 2072,
        originalSalesPrice: 2590,
        originalSalesPriceWithoutVAT: 2072,
      },
      discount: {
        value: {
          upfront: 350,
          monthly: 0,
        },
        description: '',
        isSmartDiscount: true,
        smartDiscountCode: 'Web_Unique_Test',
        isUniqueDiscount: true,
        name: 'Galaxy Watch rabatt',
      },
      isReSwitch: false,
      isWebDeal: false,
      items: [],
    },
  ];

  return (
    <Container style={style} size="medium">
      <ShoppingCartV2
        heading={heading}
        cartItems={content}
        delivery={delivery}
        totalPriceUpfront={2290}
        onChangeQuantity={() => {}}
        onRemoveItem={() => {}}
        formatPrice={(price: any) => `${price},-`}
        isAnyCartItemsQuantityModifiable
        isAllowedToDelete
      />
    </Container>
  );
};
