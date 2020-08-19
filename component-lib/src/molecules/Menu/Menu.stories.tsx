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
  )
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
  )
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
  )
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
        visible: true
      }}
    />
  )
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
  )
};