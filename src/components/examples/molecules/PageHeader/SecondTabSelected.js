import React from 'react';
import { PageHeader } from '@telia/styleguide';

const menuLinks = [
  {
    heading: 'Privat',
    loggedInLinks: [],
    loggedOutLinks: [{ text: 'Mobilabonnement og priser', url: '/' }],
  },
  {
    heading: 'Bedrift',
    loggedInLinks: [],
    loggedOutLinks: [
      { text: 'Bedrift 1', url: '/' },
      { text: 'Bedrift 2', url: '/' },
      { text: 'Bedrift 3', url: '/' },
      { text: 'Kontakt oss', url: '/' },
    ],
  },
];

const LoggedOutNoItems = () => (
  <PageHeader
    menuId="page-header-menu--example-5"
    logoUrl="#"
    logoTitle="Telia logo"
    logoImageDesktopPath={require('assets/images/logo/logo.svg')}
    logoImageDesktopPathInverted={require('assets/images/logo/logo-inverted.svg')}
    cartItemCount={0}
    menuSelectedTabIndex={1}
    menuLinks={menuLinks}
  />
);

export default LoggedOutNoItems;
