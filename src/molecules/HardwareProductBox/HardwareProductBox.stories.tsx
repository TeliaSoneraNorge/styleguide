import React from 'react';
import { HardwareProductBox } from '../../index';

export default {
  title: 'Component library/Molecules/HardwareProductBox',
  component: HardwareProductBox,
};

export const DefaultGridView = () => {
  const products = [
    {
      campaign: {
        text: 'Kampanje',
        backgroundColor: '#F2F2F2',
        color: '#303030',
      },
      brand: 'Apple',
      image: {
        title: '',
        url:
          '//images.ctfassets.net/iz15t1lxx44v/5EHb7IK72Vcx3KrI1PsduP/653d5b499c0614928f13f5ccb850a9f1/iPhone-12-Black.png',
      },
      is5G: false,
      name: 'iPhone 12 Pro Max With Extra Long Name',
      priceDescription: 'Med SVITSJ',
      price: 489,
      priceDisclaimerLine1: 'Totalt etter 24 md. 16 056,-',
      priceDisclaimerLine2: 'Abo u/avtaletid kommer i tillegg',
    },
    {
      campaign: {
        text: 'Tilbud',
        backgroundColor: '#EDC8FF',
        color: '#3F005E',
      },
      url: '#',
      brand: 'Apple',
      image: {
        title: '',
        url:
          '//images.ctfassets.net/iz15t1lxx44v/5EHb7IK72Vcx3KrI1PsduP/653d5b499c0614928f13f5ccb850a9f1/iPhone-12-Black.png',
      },
      is5G: false,
      name: 'iPhone 12 Pro Max',
      priceDescription: 'Med SVITSJ',
      price: 489,
      priceDisclaimerLine1: 'Totalt etter 24 md. 16 056,-',
      priceDisclaimerLine2: 'Abo u/avtaletid kommer i tillegg',
    },
    {
      campaign: {
        text: 'Nyhet',
        backgroundColor: '#FFE39F',
        color: '#6B4100',
      },
      highlight: {
        heading: 'Airbuds Pro',
        text: 'Verdi 2.500,-',
        color: 'orange',
        icon: 'gift',
      },
      brand: 'Apple',
      image: {
        title: '',
        url:
          '//images.ctfassets.net/iz15t1lxx44v/5EHb7IK72Vcx3KrI1PsduP/653d5b499c0614928f13f5ccb850a9f1/iPhone-12-Black.png',
      },
      is5G: false,
      name: 'iPhone 12 Pro Max',
      priceDescription: 'Med SVITSJ',
      price: 489,
      priceDisclaimerLine1: 'Totalt etter 24 md. 16 056,-',
      priceDisclaimerLine2: 'Abo u/avtaletid kommer i tillegg',
    },
    {
      campaign: null,
      brand: 'Apple',
      image: {
        title: '',
        url:
          '//images.ctfassets.net/iz15t1lxx44v/5EHb7IK72Vcx3KrI1PsduP/653d5b499c0614928f13f5ccb850a9f1/iPhone-12-Black.png',
      },
      is5G: true,
      name: 'iPhone 12 Pro Max',
      priceDescription: 'Med SVITSJ',
      price: 489,
      priceDisclaimerLine1: 'Totalt etter 24 md. 16 056,-',
      priceDisclaimerLine2: 'Abo u/avtaletid kommer i tillegg',
    },
  ];
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        paddingTop: '2rem',
      }}
    >
      {products.map((product, index) => {
        return (
          <div style={{ marginTop: 50 }}>
            <HardwareProductBox key={index} {...product}>
              <div>
                <div className="hardware-product-box__product-price-decription">{product.priceDescription}</div>
                <div className="hardware-product-box__product-price">
                  {product.price},- <span>pr md.</span>
                </div>
                <div className="hardware-product-box__product-price-disclaimer">
                  {product.priceDisclaimerLine1}
                  {product.priceDisclaimerLine2 && (
                    <>
                      <br />
                      {product.priceDisclaimerLine2}
                    </>
                  )}
                </div>
              </div>
            </HardwareProductBox>
          </div>
        );
      })}
    </div>
  );
};

const product = {
  campaign: {
    text: 'nyhet',
    backgroundColor: '#CBEFFF',
    color: '#003D65',
  },
  brand: 'Apple',
  image: {
    title: '',
    url:
      '//images.ctfassets.net/iz15t1lxx44v/5EHb7IK72Vcx3KrI1PsduP/653d5b499c0614928f13f5ccb850a9f1/iPhone-12-Black.png',
  },
  is5G: true,
  highlight: {
    heading: 'Airbuds Pro',
    text: 'Verdi 2.500,-',
    color: 'orange',
    icon: 'gift',
  },
  name: 'iPhone 12 Pro Max',
  priceDescription: 'Med SVITSJ',
  price: 489,
  priceDisclaimerLine1: 'Totalt etter 24 md. 16 056,-',
  priceDisclaimerLine2: 'Abo u/avtaletid kommer i tillegg',
};

export const Default = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <HardwareProductBox {...product}>
        <div>
          <div className="hardware-product-box__product-price-decription">{product.priceDescription}</div>
          <div className="hardware-product-box__product-price">
            {product.price},- <span>pr md.</span>
          </div>
          <div className="hardware-product-box__product-price-disclaimer">
            {product.priceDisclaimerLine1}
            {product.priceDisclaimerLine2 && (
              <>
                <br />
                {product.priceDisclaimerLine2}
              </>
            )}
          </div>
        </div>
      </HardwareProductBox>
    </div>
  );
};

const highlights = [
  {
    heading: 'Airbuds Pro',
    color: 'orange',
    icon: 'gift',
    textColor: 'red',
  },
  {
    heading: 'Airbuds Pro',
    text: 'Verdi 2.500,-',
    color: 'orange',
    textColor: 'black',
  },
  {
    heading: 'Airbuds Pro',
    text: 'Verdi 2.500,-',
    color: 'orange',
    icon: 'gift',
    textColor: 'black',
  },
];

export const DifferentHighlights = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        paddingTop: '2rem',
      }}
    >
      {highlights.map((highlight) => (
        <HardwareProductBox {...product} highlight={highlight}>
          <div>
            <div className="hardware-product-box__product-price-decription">{product.priceDescription}</div>
            <div className="hardware-product-box__product-price">
              {product.price},- <span>pr md.</span>
            </div>
            <div className="hardware-product-box__product-price-disclaimer">
              {product.priceDisclaimerLine1}
              {product.priceDisclaimerLine2 && (
                <>
                  <br />
                  {product.priceDisclaimerLine2}
                </>
              )}
            </div>
          </div>
        </HardwareProductBox>
      ))}
    </div>
  );
};

export const WithImageBadge = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        paddingTop: '2rem',
      }}
    >
      {highlights.map((highlight) => (
        <HardwareProductBox
          {...product}
          imageBadge={{
            url:
              'https://images.ctfassets.net/iz15t1lxx44v/14mfHj2s0FzYw0Jalwb7iH/23e3a87bb288834aeb840d19e51ee5d4/Airpods_2gen.png',
          }}
        >
          <div>
            <div className="hardware-product-box__product-price-decription">{product.priceDescription}</div>
            <div className="hardware-product-box__product-price">
              {product.price},- <span>pr md.</span>
            </div>
            <div className="hardware-product-box__product-price-disclaimer">
              {product.priceDisclaimerLine1}
              {product.priceDisclaimerLine2 && (
                <>
                  <br />
                  {product.priceDisclaimerLine2}
                </>
              )}
            </div>
          </div>
        </HardwareProductBox>
      ))}
    </div>
  );
};
