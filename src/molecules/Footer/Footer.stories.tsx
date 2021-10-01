import React, { useState, useEffect } from 'react';
import { Footer } from '../../index';
import { FooterRow, AddressColumn, SocialLinkColumn, LinkColumn, FooterProps, LogoColumn } from './Footer';
import images from '../../stories/sampleImages';
import axios from 'axios';

export default {
  title: 'Component library/Molecules/Footer',
  component: Footer,
};

export const DefaultFooter = () => {
  return (
    <>
      <Footer {...footer} />
    </>
  );
};

export const CityAndPostalCodeEitherNullOrUndefinedFooter = () => {
  return (
    <>
      <Footer {...footerMissingCityPostalCode} />
    </>
  );
};

export const MissingBottomRowFooter = () => {
  return (
    <>
      <Footer {...footerMissingBottomRow} />
    </>
  );
};

export const MissingTopRowFooter = () => {
  return (
    <>
      <Footer {...footerMissingTopRow} />
    </>
  );
};

export const MissingOneColumnTopRowFooter = () => {
  return (
    <>
      <Footer {...footerMissingOneColumnLinksTopRow} />
    </>
  );
};

export const MissingColumnLinksBottomRowFooter = () => {
  return (
    <>
      <Footer {...footerMissingColumnLinksBottomRow} />
    </>
  );
};

export const MissingAddressAndColumnLinksBottomRowFooter = () => {
  return (
    <>
      <Footer {...footerMissingAddressAndColumnLinksBottomRow} />
    </>
  );
};

export const MissingAddressAndColumnLinksAndSocialBottomRowFooter = () => {
  return (
    <>
      <Footer {...footerMissingAddressColumnLinksAndSocialBottomRow} />
    </>
  );
};

export const GetFooterDataFromApiFooter = () => {
  const [footerData, setFooter] = useState(null);
  const url = 'https://stage.telia.no/api/footerapi/getB2c';

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          'api-token': 'public-d24162be',
        },
      })
      .then((res) => {
        console.log('Footer data model from telia.no backend');
        console.log(res.data);
        setFooter(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return <>{footerData && <Footer {...footerData} />}</>;
};

const linkColumnsOne: LinkColumn[] = [
  {
    heading: 'Support',
    links: [
      {
        name: 'Dekningskart',
        url: './',
        color: '',
        iconUrl: '',
      },
    ],
  },
];

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
        color: 'light-purple',
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

const linkColumnsMissing: LinkColumn[] = [
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
        color: 'light-purple',
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
        color: 'light-purple',
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
      url: '/',
      color: '',
    },
    {
      name: 'Twitter',
      url: '/',
      color: 'light-purple',
    },
    {
      name: 'Youtube',
      url: '/',
      color: '',
    },
  ],
};

const logoColumn: LogoColumn = {
  url: 'https://www.telia.no',
  imageUrl: images.logo,
  imageAltText: 'This is alt text for logo image',
};

const topRow: FooterRow = {
  logoColumn: null,
  linkColumns: linkColumns,
  addressColumn: null,
  socialLinkColumn: null,
};

const topRowMissingOne: FooterRow = {
  logoColumn: null,
  linkColumns: linkColumnsMissing,
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

const addressColumnMissingCityPostalCode: AddressColumn = {
  companyName: 'Telia Norge AS',
  street: 'Sandakerveien 140',
  city: null,
  postalCode: null,
  officeType: 'Hovedkontor',
};

const topRow1: FooterRow = {
  logoColumn: null,
  linkColumns: linkColumns,
  addressColumn: null,
  socialLinkColumn: null,
};

const bottomRow1: FooterRow = {
  logoColumn: logoColumn,
  linkColumns: linksColumnsBot,
  addressColumn: addressColumnMissingCityPostalCode,
  socialLinkColumn: sosialLinkColumn,
};

const footerMissingCityPostalCode: FooterProps = {
  topRow: topRow1,
  bottomRow: bottomRow1,
};

const bottomRowMissingColumnLinks: FooterRow = {
  logoColumn: logoColumn,
  addressColumn: addressColumn,
  linkColumns: null,
  socialLinkColumn: sosialLinkColumn,
};

const bottomRowMissingAddressAndColumnLinks: FooterRow = {
  logoColumn: logoColumn,
  addressColumn: null,
  linkColumns: null,
  socialLinkColumn: sosialLinkColumn,
};

const bottomRowMissingAddressColumnLinksAndSosial: FooterRow = {
  logoColumn: logoColumn,
  addressColumn: null,
  linkColumns: null,
  socialLinkColumn: null,
};

const footerMissingBottomRow: FooterProps = {
  topRow: topRow,
  bottomRow: null,
};

const footerMissingTopRow: FooterProps = {
  topRow: null,
  bottomRow: bottomRow,
};

const footerMissingColumnLinksBottomRow: FooterProps = {
  topRow: topRow,
  bottomRow: bottomRowMissingColumnLinks,
};

const footerMissingAddressAndColumnLinksBottomRow: FooterProps = {
  topRow: topRow,
  bottomRow: bottomRowMissingAddressAndColumnLinks,
};

const footerMissingAddressColumnLinksAndSocialBottomRow: FooterProps = {
  topRow: topRow,
  bottomRow: bottomRowMissingAddressColumnLinksAndSosial,
};

const footerMissingOneColumnLinksTopRow: FooterProps = {
  topRow: topRowMissingOne,
  bottomRow: bottomRow,
};

const footerTopRowOne: FooterRow = {
  logoColumn: null,
  linkColumns: linkColumnsOne,
  addressColumn: null,
  socialLinkColumn: null,
};

const footerOneLinkColumn: FooterProps = {
  topRow: footerTopRowOne,
  bottomRow: null,
};
