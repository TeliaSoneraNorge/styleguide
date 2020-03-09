import React, { useState } from 'react';
import { Menu } from '../../index';
import img from '../../stories/sampleImages';

export default {
  title: 'Component library|Molecules/Menu',
  component: Menu,
};

const menuLinks = [
  {
    heading: { text: 'Privat', url: '#' },
    links: [
      {
        text: 'Mobiler og tilbehør',
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

export const Default = () => (
  // <Router history={history}>
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
    />
  // </Router>
);