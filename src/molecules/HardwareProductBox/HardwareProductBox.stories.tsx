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
        text: 'kampanje',
        backgroundColor: '#990AE3',
        color: '#ffffff',
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
        text: 'tilbud',
        backgroundColor: '#FF9B00',
        color: '#ffffff',
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
        text: 'nyhet',
        backgroundColor: '#007ACC',
        color: '#ffffff',
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

export const Default = () => {
  const product = {
    campaign: {
      text: 'nyhet',
      backgroundColor: '#007ACC',
      color: '#ffffff',
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
