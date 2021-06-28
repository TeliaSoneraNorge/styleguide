import React from 'react';
import { Footer } from '../../index';
import { CompanyInformation, SiteWideLinks } from './Footer';

export default {
  title: 'Component library/Molecules/Footer',
  component: Footer,
};

export const Default = () => {
  return <Footer top={top} bottom={bottom} />;
};

const top: SiteWideLinks[] = [
  {
    title: 'Support',
    links: [
      {
        name: 'Dekningskart',
        url: './',
        isPurple: false,
      },
      {
        name: 'Driftsmelding',
        url: './',
        isPurple: false,
      },
      {
        name: 'Last ned apper',
        url: './',
        isPurple: false,
      },
      {
        name: 'Lade kontantkort',
        url: './',
        isPurple: true,
      },
      {
        name: 'Se Telia Play',
        url: './',
        isPurple: false,
      },
      {
        name: 'Valgmenyen',
        url: './',
        isPurple: false,
      },
      {
        name: 'Logg inn',
        url: './',
        isPurple: false,
      },
    ],
  },
  {
    title: 'Kjøp',
    links: [
      {
        name: 'Mobilabonnement',
        url: './',
        isPurple: false,
      },
      {
        name: 'Bredbånd',
        url: './',
        isPurple: false,
      },
      {
        name: 'TV-abonnement',
        url: './',
        isPurple: false,
      },
      {
        name: 'iPhone 12',
        url: './',
        isPurple: false,
      },
      {
        name: 'Samsung',
        url: './',
        isPurple: false,
      },
    ],
  },
  {
    title: 'Kontakt',
    links: [
      {
        name: 'Kundeservice',
        url: './',
        isPurple: false,
      },
      {
        name: 'Borettslag',
        url: './',
        isPurple: false,
      },
      {
        name: 'Nybygg',
        url: './',
        isPurple: false,
      },
      {
        name: 'Finn butikk',
        url: './',
        isPurple: false,
      },
    ],
  },
  {
    title: 'Om Telia',
    links: [
      {
        name: 'Om Telia Norge',
        url: './',
        isPurple: false,
      },
      {
        name: '5G',
        url: './',
        isPurple: false,
      },
      {
        name: 'Press',
        url: './',
        isPurple: false,
      },
      {
        name: 'Karriere',
        url: './',
        isPurple: false,
      },
      {
        name: 'Bærekraft',
        url: './',
        isPurple: false,
      },
    ],
  },
];

const bottom: CompanyInformation = {
  url: './',
  address: {
    companyName: 'Telia Norge AS',
    officeType: 'Hovedkontor',
    street: 'Sandakerveien 140',
    city: 'Oslo',
    postalCode: '0484',
  },
  links: [
    {
      name: 'Telia Personvern',
      url: './',
      isPurple: false,
    },
    {
      name: 'Cookieinformasjon',
      url: './',
      isPurple: true,
    },
    {
      name: 'Cookieinnstillinger',
      url: './',
      isPurple: false,
    },
  ],
  facebook: {
    name: 'Facebook',
    url: './',
    isPurple: false,
  },
  twitter: {
    name: 'Twitter',
    url: './',
    isPurple: true,
  },
  youtube: {
    name: 'YouTube',
    url: './',
    isPurple: false,
  },
};
