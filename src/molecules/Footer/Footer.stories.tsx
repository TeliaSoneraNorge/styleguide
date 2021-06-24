import React from 'react';
import { Footer } from '../../index';
import { IFooterBottomDataStruct, ILinkList } from './Footer';

export default {
  title: 'Component library/Molecules/Footer',
  component: Footer,
};

export const Default = () => {
  return <Footer top={top} bottom={bottom} />;
};

const top: ILinkList[] = [
  {
    title: 'Support',
    links: [
      {
        name: 'Dekningskart',
        url: './',
        color: false,
      },
      {
        name: 'Driftsmelding',
        url: './',
        color: false,
      },
      {
        name: 'Last ned apper',
        url: './',
        color: false,
      },
      {
        name: 'Lade kontantkort',
        url: './',
        color: true,
      },
      {
        name: 'Se Telia Play',
        url: './',
        color: false,
      },
      {
        name: 'Valgmenyen',
        url: './',
        color: false,
      },
      {
        name: 'Logg inn',
        url: './',
        color: false,
      },
    ],
  },
  {
    title: 'Kjøp',
    links: [
      {
        name: 'Mobilabonnement',
        url: './',
        color: false,
      },
      {
        name: 'Bredbånd',
        url: './',
        color: false,
      },
      {
        name: 'TV-abonnement',
        url: './',
        color: false,
      },
      {
        name: 'iPhone 12',
        url: './',
        color: false,
      },
      {
        name: 'Samsung',
        url: './',
        color: false,
      },
    ],
  },
  {
    title: 'Kontakt',
    links: [
      {
        name: 'Kundeservice',
        url: './',
        color: false,
      },
      {
        name: 'Borettslag',
        url: './',
        color: false,
      },
      {
        name: 'Nybygg',
        url: './',
        color: false,
      },
      {
        name: 'Finn butikk',
        url: './',
        color: false,
      },
    ],
  },
  {
    title: 'Om Telia',
    links: [
      {
        name: 'Om Telia Norge',
        url: './',
        color: false,
      },
      {
        name: '5G',
        url: './',
        color: false,
      },
      {
        name: 'Press',
        url: './',
        color: false,
      },
      {
        name: 'Karriere',
        url: './',
        color: false,
      },
      {
        name: 'Bærekraft',
        url: './',
        color: false,
      },
    ],
  },
];

const bottom: IFooterBottomDataStruct = {
  url: './',
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
      color: false,
    },
    {
      name: 'Cookieinformasjon',
      url: './',
      color: true,
    },
    {
      name: 'Cookieinnstillinger',
      url: './',
      color: false,
    },
  ],
  facebook: {
    name: 'Facebook',
    url: './',
    color: false,
  },
  twitter: {
    name: 'Twitter',
    url: './',
    color: true,
  },
  youtube: {
    name: 'YouTube',
    url: './',
    color: false,
  },
};
