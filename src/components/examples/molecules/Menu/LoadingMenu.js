import React from 'react';
import { Router } from 'react-router-dom';
import { Menu } from '@telia/styleguide';
import { history } from '../../../../utils/historyUtil';

const menuLinks = [
  {
    heading: { text: 'Privat', url: '#' },
    links: [{ text: 'Hjelp', url: '#' }],
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

const Default = () => (
  <Router history={history}>
    <Menu
      loginUrl="#Menu"
      logoUrl="#"
      logoTitle="Telia logo"
      activeIndex={0}
      activeLinkIndex={-1}
      menuLinks={menuLinks}
      logoImageDesktopPath={require('assets/images/logo/logo.svg')}
      logoImageInverseDesktopPath={require('assets/images/logo/logo-inverted.svg')}
      onSearchSubmit={() => {}}
      lockBodyOnMenuOpen
      isLoading={true}
    />
  </Router>
);

export default Default;
