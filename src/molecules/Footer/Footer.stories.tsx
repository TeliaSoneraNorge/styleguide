import React from 'react';
import { Footer } from '../../index';
import { FooterRow, AddressColumn, SocialLinkColumn, LinkColumn, FooterProps, LogoColumn } from './Footer';
import images from '../../stories/sampleImages';

export default {
  title: 'Component library/Molecules/Footer',
  component: Footer,
};

export const DefaultFooter = () => {
  return (
    <>
      <p>{'Important! - Backend for enriching model from telia.no is under contruction -'}</p>
      <Footer {...footer} />
    </>
  );
};

export const CityAndPostalCodeEitherNullOrUndefinedFooter = () => {
  return (
    <>
      <p>{'Important! - Backend for enriching model from telia.no is under contruction -'}</p>
      <Footer {...footer1} />
    </>
  );
};

const linkColumns: LinkColumn[] = [
  {
    heading: 'Support',
    links: [
      {
        name: 'Dekningskart',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Driftsmelding',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Last ned apper',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Lade kontantkort',
        url: './',
        color: 'purple',
        iconUrl: '',
      },
      {
        name: 'Se Telia Play',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Valgmenyen',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Logg inn',
        url: './',
        color: '',
        iconUrl: '',
      },
    ],
  },
  {
    heading: 'Kjøp',
    links: [
      {
        name: 'Mobilabonnement',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Bredbånd',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'TV-abonnement',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'iPhone 12',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Samsung',
        url: './',
        color: '',
        iconUrl: '',
      },
    ],
  },
  {
    heading: 'Kontakt',
    links: [
      {
        name: 'Kundeservice',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Borettslag',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Nybygg',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Finn butikk',
        url: './',
        color: '',
        iconUrl: '',
      },
    ],
  },
  {
    heading: 'Om Telia',
    links: [
      {
        name: 'Om Telia Norge',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: '5G',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Press',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Karriere',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Bærekraft',
        url: './',
        color: '',
        iconUrl: '',
      },
    ],
  },
];

const addressColumn: AddressColumn = {
  companyName: 'Telia Norge AS',
  street: 'Sandakerveien 140',
  city: 'Oslo',
  postalCode: '0484',
  officeType: 'Hovedkontor',
};

const linksColumnsBot: LinkColumn[] = [
  {
    heading: '',
    links: [
      {
        name: 'Telia Personvern',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Cookieinformasjon',
        url: './',
        color: 'purple',
        iconUrl: '',
      },
      {
        name: 'Cookieinnstillinger',
        url: './',
        color: '',
        iconUrl: '',
      },
    ],
  },
];

const sosialLinkColumn: SocialLinkColumn = {
  links: [
    {
      name: 'Facebook',
      url: '',
      color: 'white',
    },
    {
      name: 'Twitter',
      url: '',
      color: 'purple',
    },
    {
      name: 'Youtube',
      url: '',
      color: 'white',
    },
  ],
};

const logoColumn: LogoColumn = {
  url: 'https://www.telia.no',
  imageUrl: images.logo,
};

const topRow: FooterRow = {
  logoColumn: null,
  linkColumns: linkColumns,
  addressColumn: null,
  socialLinkColumn: null,
};

const bottomRow: FooterRow = {
  logoColumn: logoColumn,
  linkColumns: linksColumnsBot,
  addressColumn: addressColumn,
  socialLinkColumn: sosialLinkColumn,
};

const footer: FooterProps = {
  topRow: topRow,
  bottomRow: bottomRow,
};

const linkColumns1: LinkColumn[] = [
  {
    heading: 'Support',
    links: [
      {
        name: 'Dekningskart',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Driftsmelding',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Last ned apper',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Lade kontantkort',
        url: './',
        color: 'purple',
        iconUrl: '',
      },
      {
        name: 'Se Telia Play',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Valgmenyen',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Logg inn',
        url: './',
        color: '',
        iconUrl: '',
      },
    ],
  },
  {
    heading: 'Kjøp',
    links: [
      {
        name: 'Mobilabonnement',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Bredbånd',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'TV-abonnement',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'iPhone 12',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Samsung',
        url: './',
        color: '',
        iconUrl: '',
      },
    ],
  },
  {
    heading: 'Kontakt',
    links: [
      {
        name: 'Kundeservice',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Borettslag',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Nybygg',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Finn butikk',
        url: './',
        color: '',
        iconUrl: '',
      },
    ],
  },
  {
    heading: 'Om Telia',
    links: [
      {
        name: 'Om Telia Norge',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: '5G',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Press',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Karriere',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Bærekraft',
        url: './',
        color: '',
        iconUrl: '',
      },
    ],
  },
];

const addressColumn1: AddressColumn = {
  companyName: 'Telia Norge AS',
  street: 'Sandakerveien 140',
  city: undefined,
  postalCode: undefined,
  officeType: 'Hovedkontor',
};

const linksColumnsBot1: LinkColumn[] = [
  {
    heading: '',
    links: [
      {
        name: 'Telia Personvern',
        url: './',
        color: '',
        iconUrl: '',
      },
      {
        name: 'Cookieinformasjon',
        url: './',
        color: 'purple',
        iconUrl: '',
      },
      {
        name: 'Cookieinnstillinger',
        url: './',
        color: '',
        iconUrl: '',
      },
    ],
  },
];

const sosialLinkColumn1: SocialLinkColumn = {
  links: [
    {
      name: 'Facebook',
      url: '',
      color: 'white',
    },
    {
      name: 'Twitter',
      url: '',
      color: 'purple',
    },
    {
      name: 'Youtube',
      url: '',
      color: 'white',
    },
  ],
};

const logoColumn1: LogoColumn = {
  url: 'https://www.telia.no',
  imageUrl: images.logo,
};

const topRow1: FooterRow = {
  logoColumn: null,
  linkColumns: linkColumns1,
  addressColumn: null,
  socialLinkColumn: null,
};

const bottomRow1: FooterRow = {
  logoColumn: logoColumn1,
  linkColumns: linksColumnsBot1,
  addressColumn: addressColumn1,
  socialLinkColumn: sosialLinkColumn1,
};

const footer1: FooterProps = {
  topRow: topRow1,
  bottomRow: bottomRow1,
};
