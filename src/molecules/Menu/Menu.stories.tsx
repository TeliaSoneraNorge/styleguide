import React, { useState } from 'react';
import Menu from './Menu';
import img from '../../stories/sampleImages';

export default {
  title: 'Component library/Molecules/Menu',
  component: Menu,
};

export const Default = () => {
  const menuLinks = [
    {
      heading: { text: 'Privat', url: '#' },
      links: [
        {
          text: 'Nettbutikk',
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
        {
          text: 'Teknologi og samfunn',
          subLinks: [
            { text: 'IoT', url: '#' },
            { text: '5G', url: '#' },
            { text: 'StartUp', url: '#' },
          ],
        },
        { text: 'Nettbutikk', url: '#' },
        { text: 'Kundeservice', url: '#' },
      ],
    },
  ];

  return (
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
  );
};

export const LoadingMenu = () => {
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

  return (
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
      lockBodyOnMenuOpen
      isLoading={true}
    />
  );
};

export const LoggedInMenuB2C = () => {
  const menuLinks = [
    {
      heading: { text: 'Privat', url: '#' },
      links: [
        {
          text: 'Nettbutikk',
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

  return (
    <Menu
      loginUrl="#Menu"
      logoUrl="#"
      logoTitle="Telia logo"
      activeIndex={0}
      menuLinks={menuLinks}
      logoImageDesktopPath={img.logo}
      logoImageInverseDesktopPath={img.logoInverted}
      onSearchSubmit={() => {}}
      lockBodyOnMenuOpen={true}
      isLoggedIn={true}
      myPageUrl="#"
    />
  );
};

export const LoggedInWithCart = () => {
  const [count, setCount] = useState(1);
  const menuLinks = [
    {
      heading: { text: 'Privat', url: '#' },
      links: [
        {
          text: 'Nettbutikk',
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

  return (
    <Menu
      loginUrl="#Menu"
      logoUrl="#"
      logoTitle="Telia logo"
      activeIndex={0}
      menuLinks={menuLinks}
      logoImageDesktopPath={img.logo}
      logoImageInverseDesktopPath={img.logoInverted}
      onSearchSubmit={() => {}}
      lockBodyOnMenuOpen={true}
      isLoggedIn={true}
      myPageUrl="#"
      numberOfItemsInCart={count}
      onCartClick={() => {
        setCount((count) => count + 1);
      }}
    />
  );
};

export const LoggedInDropdownMenuB2C = () => {
  const menuLinks = [
    {
      heading: { text: 'Privat', url: '#' },
      links: [
        {
          text: 'Nettbutikk',
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

  return (
    <Menu
      loginUrl="#Menu"
      logoUrl="#"
      logoTitle="Telia logo"
      activeIndex={0}
      menuLinks={menuLinks}
      logoImageDesktopPath={img.logo}
      logoImageInverseDesktopPath={img.logoInverted}
      onSearchSubmit={() => {}}
      lockBodyOnMenuOpen={true}
      isLoggedIn={true}
      myPageUrl="#"
      dropdownMenu={{
        type: 'B2C',
        channel: 'mobil',
        visible: true,
      }}
    />
  );
};

export const LoggedInDropdownMenuWithDaas = () => {
  const menuLinks = [
    {
      heading: { text: 'Privat', url: '#' },
      links: [
        {
          text: 'Nettbutikk',
          subLinks: [{ text: 'Mobiltelefoner', url: '#' }],
        },
        { text: 'Mobilabonnement', url: '#' },
      ],
    },
    {
      heading: { text: 'Bedrift', url: '#' },
      links: [{ text: 'Tjenester', url: '#' }],
    },
  ];

  return (
    <Menu
      loginUrl="#Menu"
      logoUrl="#"
      logoTitle="Telia logo"
      activeIndex={0}
      menuLinks={menuLinks}
      logoImageDesktopPath={img.logo}
      logoImageInverseDesktopPath={img.logoInverted}
      onSearchSubmit={() => {}}
      lockBodyOnMenuOpen={true}
      isLoggedIn={true}
      myPageUrl="#"
      dropdownMenu={{
        type: 'B2B',
        channel: 'mobil',
        visible: true,
      }}
      daasLink={{
        text: 'Telia utstyrsavtale',
        url: '#daas',
      }}
    />
  );
};

export const OnlyLogo = () => (
  <Menu
    logoUrl="#"
    logoTitle="Telia logo"
    logoImageDesktopPath={img.logo}
    logoImageInverseDesktopPath={img.logoInverted}
    onlyLogo
  />
);

export const OnlyLogoAndCart = () => {
  const [count, setCount] = useState(1);

  return (
    <Menu
      logoUrl="#"
      logoTitle="Telia logo"
      logoImageDesktopPath={img.logo}
      logoImageInverseDesktopPath={img.logoInverted}
      numberOfItemsInCart={count}
      onCartClick={() => {
        setCount((count) => count + 1);
      }}
      onlyLogo
    />
  );
};

export const SingleTopLevelMenu = () => {
  const menuLinks = [
    {
      links: [
        {
          text: 'Nettbutikk',
          subLinks: [
            { text: 'Mobiltelefoner', url: '#' },
            { text: 'Smartklokker', url: '#' },
            { text: 'Nettbrett', url: '#' },
            { text: 'Tilbehør', url: '#' },
          ],
        },
        { text: 'Mobilabonnement', url: '#' },
        { text: 'Mobilt bredbånd', url: '#' },
        {
          text: 'Teknologi og samfunn',
          subLinks: [
            { text: 'IoT', url: '#' },
            { text: '5G', url: '#' },
            { text: 'StartUp', url: '#' },
          ],
        },
        { text: 'Dekning', url: '#' },
        { text: 'Hjelp', url: '#' },
      ],
    },
  ];

  return (
    <Menu
      loginUrl="#Menu"
      logoUrl="#"
      logoTitle="Telia logo"
      activeIndex={0}
      menuLinks={menuLinks}
      logoImageDesktopPath={img.logo}
      logoImageInverseDesktopPath={img.logoInverted}
      onSearchSubmit={() => {}}
      lockBodyOnMenuOpen={true}
      isLoggedIn={true}
      myPageUrl="#"
    />
  );
};

export const LoginButtonText = () => {
  const menuLinks = [
    {
      heading: { text: '', url: '#' },
      links: [],
    },
  ];

  const buttonValues = {
    login: 'Login button text',
    myPage: 'My page button text',
    frontPage: 'Front page button text',
    closeButton: 'Close button text',
  };

  return (
    <Menu
      loginUrl="#Menu"
      activeIndex={0}
      menuLinks={menuLinks}
      buttonValues={buttonValues}
      logoImageDesktopPath={img.logo}
      logoImageInverseDesktopPath={img.logoInverted}
    />
  );
};
