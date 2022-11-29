import React from 'react';
import BundleDealBox from './index';

export default {
  title: 'Component library/Molecules/BundleDealBox',
  component: BundleDealBox,
};

export const Default = () => {
  const bundle = {
    flashText: {
      text: 'Spar 2500 ,-',
      textColor: '#663E00',
      color: '#FFDCA6',
    },
    image: {
      url:
        'https://images.ctfassets.net/iz15t1lxx44v/4qB2ZgAwKLLlo0MYg7Ubo3/19cc027bcd9cafac47750d6795b20177/Harman-Kardon-Studio-Onyx-8-Black-1.png?',
    },
    productName: 'Onyx Studio 7',
    description:
      'Bestill Onyx Studio 7 sammen med et Telia X Rask-abonnement med 12 md. avtaletid og betal kun 1,- for høyttaleren',
    discountPrice: '3999,-',
    salesPrice: '1,-',
    disclaimer: 'Totalpris 6 589,- inkl. Onyx Studio 7 og Telia X Rask i 12 md. ',
    buttonText: 'Les mer',
    url: '',
  };

  return <BundleDealBox {...bundle} />;
};

export const ListView = () => {
  const bundles = [
    {
      flashText: {
        text: 'Spar 2500 ,-',
        textColor: '#663E00',
        color: '#FFDCA6',
      },
      image: {
        url:
          'https://images.ctfassets.net/iz15t1lxx44v/4qB2ZgAwKLLlo0MYg7Ubo3/19cc027bcd9cafac47750d6795b20177/Harman-Kardon-Studio-Onyx-8-Black-1.png?',
      },
      productName: 'Onyx Studio 7',
      description:
        'Bestill Onyx Studio 7 sammen med et Telia X Rask-abonnement med 12 md. avtaletid og betal kun 1,- for høyttaleren',
      discountPrice: '3999,-',
      salesPrice: '1,-',
      disclaimer: 'Totalpris 6 589,- inkl. Onyx Studio 7 og Telia X Rask i 12 md. ',
      buttonText: 'Les mer',
      url: '',
    },
    {
      flashText: {
        text: 'Spar 2500 ,-',
        textColor: '#663E00',
        color: '#FFDCA6',
      },
      image: {
        url:
          'https://images.ctfassets.net/iz15t1lxx44v/1CdBvzW6cDsaStbq3Ic94Z/d019549de9753c2a7b3baabaf4240899/AirPods_Pro_2nd-Gen_Hero_Alt_Screen__USEN.png?',
      },
      productName: 'AirPods Pro',
      description:
        'Bestiller du AirPods sammen med et Telia X Rask-abonnement med 12 md. avtaletid betaler du kun 1749,- for øreproppene.',
      discountPrice: '2490,-',
      salesPrice: '1,-',
      disclaimer: 'Totalpris 6 589,- inkl. AirPods Pro og Telia X Rask i 12 md. ',
      buttonText: 'Les mer',
      url: '',
    },
    {
      flashText: {
        text: 'Spar 2500 ,-',
        textColor: '#663E00',
        color: '#FFDCA6',
      },
      image: {
        url:
          'https://images.ctfassets.net/iz15t1lxx44v/4qB2ZgAwKLLlo0MYg7Ubo3/19cc027bcd9cafac47750d6795b20177/Harman-Kardon-Studio-Onyx-8-Black-1.png?',
      },
      productName: 'Onyx Studio 7',
      description:
        'Bestill Onyx Studio 7 sammen med et Telia X Rask-abonnement med 12 md. avtaletid og betal kun 1,- for høyttaleren',
      discountPrice: '3999,-',
      salesPrice: '1,-',
      disclaimer: 'Totalpris 6 589,- inkl. Onyx Studio 7 og Telia X Rask i 12 md. ',
      buttonText: 'Les mer',
      url: '',
    },
    {
      flashText: {
        text: 'Spar 2500 ,-',
        textColor: '#663E00',
        color: '#FFDCA6',
      },
      image: {
        url:
          'https://images.ctfassets.net/iz15t1lxx44v/4QlZKGKNLKmXgjJaXPtr3d/c95bd57d7a3fc65075c3921d95c057f5/HK_Citation_200_Product_Image_Hero_2_Black.png?',
      },
      productName: 'Citation 200',
      description:
        'Bestill Citation 200 sammen med et Telia X Rask-abonnement med 12 md. avtaletid og betal kun 1,- for høyttaleren',
      discountPrice: '3999,-',
      salesPrice: '1,-',
      disclaimer: 'Totalpris 6 589,- inkl. Citation 200 og Telia X Rask i 12 md. ',
      buttonText: 'Les mer',
      url: '',
    },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
      {bundles.map((bundle) => (
        <BundleDealBox {...bundle} />
      ))}
    </div>
  );
};
