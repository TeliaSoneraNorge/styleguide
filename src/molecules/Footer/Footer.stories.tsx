import React from 'react';
import { Footer } from '../../index';
import img from '../../stories/sampleImages';

export default {
  title: 'Component library/Molecules/Footer',
  component: Footer,
};

export const Default = () => <Footer data={footerData} />;

const footerData = {
  top: [
    {
      title: 'Support',
      links: [
        {
          name: 'Dekningskart',
          url: './',
          color: '',
        },
        {
          name: 'Driftsmelding',
          url: './',
          color: '',
        },
        {
          name: 'Last ned apper',
          url: './',
          color: '',
        },
        {
          name: 'Lade kontantkort',
          url: './',
          color: 'core-purple',
        },
        {
          name: 'Se Telia Play',
          url: './',
          color: '',
        },
        {
          name: 'Valgmenyen',
          url: './',
          color: '',
        },
        {
          name: 'Logg inn',
          url: './',
          color: '',
        },
      ],
    },
    {
      title: 'Kjøp',
      links: [
        {
          name: 'Mobilabonnement',
          url: './',
          color: '',
        },
        {
          name: 'Bredbånd',
          url: './',
          color: '',
        },
        {
          name: 'TV-abonnement',
          url: './',
          color: '',
        },
        {
          name: 'iPhone 12',
          url: './',
          color: '',
        },
        {
          name: 'Samsung',
          url: './',
          color: '',
        },
      ],
    },
    {
      title: 'Kontakt',
      links: [
        {
          name: 'Kundeservice',
          url: './',
          color: '',
        },
        {
          name: 'Borettslag',
          url: './',
          color: '',
        },
        {
          name: 'Nybygg',
          url: './',
          color: '',
        },
        {
          name: 'Finn butikk',
          url: './',
          color: '',
        },
      ],
    },
    {
      title: 'Om Telia',
      links: [
        {
          name: 'Om Telia Norge',
          url: './',
          color: '',
        },
        {
          name: '5G',
          url: './',
          color: '',
        },
        {
          name: 'Press',
          url: './',
          color: '',
        },
        {
          name: 'Karriere',
          url: './',
          color: '',
        },
        {
          name: 'Bærekraft',
          url: './',
          color: '',
        },
      ],
    },
  ],
  bottom: {
    logo: img.logo,
    link: './',
    address: {
      companyName: 'Telia Norge AS',
      office: 'Hovedkontor',
      street: 'Sandakerveien 140',
      city: 'Oslo',
      postalCode: '0484',
    },
    links: [
      {
        name: 'Telia Personvern',
        url: './',
        color: '',
      },
      {
        name: 'Cookieinformasjon',
        url: './',
        color: 'core-purple',
      },
      {
        name: 'Cookieinnstillinger',
        url: './',
        color: '',
      },
    ],
    facebook: {
      name: 'Facebook',
      url: './',
      color: '',
    },
    twitter: {
      name: 'Twitter',
      url: './',
      color: 'core-purple',
    },
    youtube: {
      name: 'YouTube',
      url: './',
      color: '',
    },
  },
};
