import React, { useState } from 'react';
import SlidingShoppingCart from './SlidingShoppingCart';
import Menu from '../../molecules/Menu/Menu';
import img from '../../stories/sampleImages';

const switchContent = [
  {
    type: 'HANDSET',
    subtype: '',
    id: '9070585',
    bundleId: 'b96ccc',
    brand: 'Apple',
    brandSlug: 'apple',
    model: 'iPhone XR 64 GB',
    modelSlug: 'iphone-xr',
    color: 'Svart',
    image: {
      url:
        '//images.ctfassets.net/iz15t1lxx44v/1ROlmyodBW4Y8mAyqsUWmy/7414af4d07760cdc66e661af41380b42/front-apple-iphone-xr-svart.png',
    },
    name: 'Apple iPhone XR 64 GB Svart',
    quantity: {
      modifiable: false,
      removable: true,
      value: 1,
    },
    price: {
      upfront: 0,
      monthly: 419,
      originalSalesPrice: 8799,
    },
    discount: {
      value: {
        upfront: 0,
      },
      description: '',
    },
    leaseMonths: null,
    isReSwitch: false,
    isWebDeal: false,
    subtitle: 'Telia SVITSJ i 24 md.',
    items: [
      {
        type: 'SUBSCRIPTION',
        id: 'SMART_X.REGULAR',
        bundleId: 'b96ccc',
        items: [
          {
            type: 'SIM',
            id: '9054990',
            image: {
              icon: 'ico_subscription',
            },
            name: 'SIM-kort',
            price: {
              upfront: 0,
            },
            quantity: {
              modifiable: false,
              removable: false,
              value: 1,
            },
          },
          {
            type: 'SERVICE',
            id: 'INSURANCE_SWITCH_2+INSURLS2V',
            image: {
              icon: 'ico_info',
            },
            name: '2 måneder SVITSJ Plussforsikring inkludert',
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
          icon: 'ico_subscription',
        },
        subtitle: 'Nummer: 900 90 900',
      },
    ],
  },
];

const subscriptionContent = [
  {
    type: 'SUBSCRIPTION',
    id: 'SMART_20GB.REGULAR',
    bundleId: '62dc0d',
    items: [
      {
        type: 'SIM',
        id: '9054990',
        image: {
          icon: 'ico_sim',
        },
        name: 'SIM-kort',
        price: {
          upfront: 0,
        },
        quantity: {
          modifiable: false,
          removable: false,
          value: 1,
        },
      },
      {
        type: 'NEW_NUMBER',
        id: '',
        image: {
          icon: 'ico_info_v2',
        },
        name: 'Etableringspris nytt nummer',
        price: {
          firstInvoice: 199,
        },
        quantity: {
          modifiable: false,
          removable: false,
          value: 1,
        },
      },
    ],
    name: 'SMART 20 GB',
    quantity: {
      modifiable: false,
      removable: true,
      value: 1,
    },
    price: {
      monthly: 529,
    },
    image: {
      amount: 20,
      unit: 'GB',
    },
    subtitle: 'Nummer: 413 20 271',
  },
  {
    type: 'DELIVERY',
    id: 'HH_express',
    image: {
      icon: 'ico_truck',
    },
    name: 'Helthjem express',
    price: {
      upfront: 0,
    },
    quantity: {
      removable: false,
      value: 1,
    },
  },
];

const accessoriesContent = [
  {
    type: 'ACCESSORY',
    subtype: 'HEADSET',
    id: '9067772',
    bundleId: null,
    brand: 'Kygo',
    brandSlug: 'kygo',
    model: 'A9/600 BT Hodetelefoner',
    modelSlug: '',
    color: 'Mørk grå',
    image: {
      url:
        '//images.ctfassets.net/iz15t1lxx44v/36BBcf94BaKgOIkmmM8qyM/5627fc551c7bd6fc929ecf66c449d4af/A9-600_Storm_Gray_side.png',
    },
    name: 'Kygo A9/600 BT Hodetelefoner Stormgrå',
    quantity: {
      modifiable: true,
      removable: true,
      value: 1,
    },
    price: {
      upfront: 999,
      originalSalesPrice: 999,
    },
    discount: {
      value: {
        upfront: 0,
      },
      description: '',
    },
    leaseMonths: null,
    isReSwitch: false,
    isWebDeal: false,
  },
  {
    type: 'ACCESSORY',
    subtype: 'HEADSET',
    id: '9067739',
    bundleId: null,
    brand: 'Kygo',
    brandSlug: 'kygo',
    model: 'A6/500 BT Hodetelefoner',
    modelSlug: '',
    color: 'Svart',
    image: {
      url:
        '//images.ctfassets.net/iz15t1lxx44v/8VbvdSXvGM0k0UuqCq4Gm/06973927bcc8953ca0b7dea9de38463a/A6_500_Black_side.png',
    },
    name: 'Kygo A6/500 BT Hodetelefoner Svart',
    quantity: {
      modifiable: true,
      removable: true,
      value: 2,
    },
    price: {
      upfront: 849,
      originalSalesPrice: 849,
    },
    discount: {
      value: {
        upfront: 0,
      },
      description: '',
    },
    leaseMonths: null,
    isReSwitch: false,
    isWebDeal: false,
  },
  {
    type: 'DELIVERY',
    id: 'PICK_UP_POINT',
    image: {
      icon: 'ico_truck',
    },
    name: 'Levert til postkontor – 2-4 dagers leveringstid',
    price: {
      upfront: 0,
    },
    quantity: {
      removable: false,
      value: 1,
    },
  },
];

const webdealContent = [
  {
    type: 'HANDSET',
    subtype: '',
    id: '9074757',
    bundleId: '09cd8b',
    brand: 'Apple',
    brandSlug: 'apple',
    model: 'iPhone 11 Pro 64 GB',
    modelSlug: 'iphone-11-pro',
    color: 'Sølv',
    image: {
      url:
        '//images.ctfassets.net/iz15t1lxx44v/4uezsi7oeIwRr9qRTI5tLZ/6ab16f9faa281ac719536b51fe74027e/iPhone_11_Pro_Silver.png',
    },
    name: 'Apple iPhone 11 Pro 64 GB Sølv',
    quantity: {
      modifiable: false,
      removable: true,
      value: 1,
    },
    price: {
      upfront: 0,
      monthly: 569,
      originalSalesPrice: 11990,
    },
    discount: {
      value: {
        upfront: 0,
      },
      description: '',
    },
    leaseMonths: null,
    isReSwitch: false,
    isWebDeal: true,
    subtitle: 'Telia SVITSJ i 24 md.',
    items: [
      {
        type: 'SUBSCRIPTION',
        id: 'SMART_10GB.REGULAR',
        bundleId: '09cd8b',
        items: [],
        name: 'SMART 10 GB',
        quantity: {
          modifiable: false,
          removable: false,
          value: 1,
        },
        price: {
          monthly: 429,
        },
        image: {
          amount: 10,
          unit: 'GB',
        },
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
        name: 'Apple AirPods with Wireless Charging Case Hvit',
        quantity: {
          modifiable: false,
          removable: true,
          value: 1,
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
    ],
  },
];

const tabletContent = [
  {
    type: 'TABLET',
    subtype: '',
    id: '9071507',
    bundleId: '3f6f7e',
    brand: 'Samsung',
    brandSlug: 'samsung',
    model: 'Galaxy Tab A (10.5", 4G, 32 GB)',
    modelSlug: 'galaxy-tab-a-105',
    color: 'Svart',
    image: {
      url:
        '//images.ctfassets.net/iz15t1lxx44v/WuwlB9SGYe6yCgm4uewcY/288afed9408d74392a286b435306326d/Samsung_TAB_A10.5_Black_Front.png',
    },
    name: 'Samsung Galaxy Tab A (10.5", 4G, 32 GB) Svart',
    quantity: {
      modifiable: false,
      removable: true,
      value: 1,
    },
    price: {
      upfront: 99,
      monthly: 150,
      originalSalesPrice: 3399,
    },
    discount: {
      value: {
        upfront: 0,
      },
      description: '',
    },
    leaseMonths: 12,
    isReSwitch: false,
    isWebDeal: false,
    subtitle: '12 md. rentefri nedbetaling',
    items: [
      {
        type: 'SUBSCRIPTION',
        id: 'MBB4G_030GB_PRIV_2.HW12LEAS',
        bundleId: '3f6f7e',
        items: [],
        name: '4G Bredbånd 30 GB med 12 md. avtaletid / 449,- per md.',
        quantity: {
          modifiable: false,
          removable: false,
          value: 1,
        },
        price: {
          monthly: 449,
        },
        image: {
          amount: 30,
          unit: 'GB',
        },
      },
    ],
  },
];

const mbbContent = [
  {
    type: 'MODEM',
    subtype: 'UNKNOWN',
    id: '9072840',
    bundleId: 'dcbbf4',
    brand: 'Netgear',
    brandSlug: 'netgear',
    model: 'AC810s Mini Router',
    modelSlug: 'netgear-ac810s',
    color: 'Matt svart',
    image: {
      url:
        '//images.ctfassets.net/iz15t1lxx44v/3OO0n8yRKoUG6Yi20McecI/ad7061b48b035ee7aa99da3fd85179d4/netgear-ac810-30074123-01.jpg',
    },
    name: 'Netgear AC810s Mini Router Svart',
    quantity: {
      modifiable: false,
      removable: true,
      value: 1,
    },
    price: {
      upfront: 699,
      monthly: 0,
      originalSalesPrice: 1999,
    },
    discount: {
      value: {
        upfront: 0,
      },
      description: '',
    },
    leaseMonths: null,
    isReSwitch: false,
    isWebDeal: false,
    items: [
      {
        type: 'SUBSCRIPTION',
        id: 'MBB4G_015GB_PRIV_2.HW12LEAS',
        bundleId: 'dcbbf4',
        items: [],
        name: '4G Bredbånd 15 GB med 12 md. avtaletid / 349,- per md.',
        quantity: {
          modifiable: false,
          removable: false,
          value: 1,
        },
        price: {
          monthly: 349,
        },
        image: {
          amount: 15,
          unit: 'GB',
        },
      },
    ],
  },
];

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
      icon: 'ico_sim',
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
      icon: 'ico_sim',
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
    image: {
      icon: 'ico_sim',
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
  {
    type: 'NEW_NUMBER',
    id: '',
    image: {
      icon: 'ico_info_v2',
    },
    name: 'Etableringspris nytt nummer',
    price: {
      firstInvoice: 199,
    },
    quantity: {
      modifiable: false,
      removable: false,
      value: 2,
    },
    indent: true,
  },
];

function getCart(item: string) {
  switch (item) {
    case 'switch':
      return switchContent;
    case 'subscription':
      return subscriptionContent;
    case 'accessories':
      return accessoriesContent;
    case 'webdeal':
      return webdealContent;
    case 'tablet':
      return tabletContent;
    case 'mbb':
      return mbbContent;
    case 'group':
      return groupContent;
    default:
      return switchContent;
  }
}

export default {
  title: 'Component library/Organisms/SlidingShoppingCart',
};

export const Default = () => {
  const heading = 'Handlekurv';
  const pricePerMonth = 500;
  const priceUpfront = 500;
  const priceFirstInvoice = 500;
  const itemToDisplay = 'switch';

  const [shouldShowCart, setShouldShowCart] = useState(false);

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
      <SlidingShoppingCart
        heading={heading}
        cartItems={getCart(itemToDisplay)}
        isAnyCartItemsQuantityModifiable
        totalPriceFirstInvoice={priceFirstInvoice}
        totalPriceMonthly={pricePerMonth}
        totalPriceUpfront={priceUpfront}
        onChangeQuantity={() => {}}
        onRemoveItem={() => {}}
        formatPrice={(price) => `${price},-`}
        shouldShowCart={shouldShowCart}
        setShouldShowCart={setShouldShowCart}
        onGoToCart={() => alert('Go to cart')}
        totalVAT={0}
        totalPriceWithoutVAT={0}
      />
    </>
  );
};

export const WithDiscount = () => {
  const heading = 'Handlekurv';
  const pricePerMonth = 500;
  const priceUpfront = 500;
  const priceFirstInvoice = 500;
  const itemToDisplay = 'switch';

  const [shouldShowCart, setShouldShowCart] = useState(false);

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
      <SlidingShoppingCart
        heading={heading}
        cartItems={getCart(itemToDisplay)}
        isAnyCartItemsQuantityModifiable
        totalPriceFirstInvoice={priceFirstInvoice}
        totalPriceMonthly={pricePerMonth}
        totalPriceUpfront={priceUpfront}
        onChangeQuantity={() => {}}
        onRemoveItem={() => {}}
        formatPrice={(price) => `${price},-`}
        shouldShowCart={shouldShowCart}
        setShouldShowCart={setShouldShowCart}
        onGoToCart={() => alert('Go to cart')}
        discount={{
          label: '30% extra rabatt første 3 md.',
          price: -404,
        }}
        totalVAT={0}
        totalPriceWithoutVAT={0}
      />
    </>
  );
};
