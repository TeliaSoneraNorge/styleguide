import React from 'react';
import { Breadcrumbs } from '../../index';

export default {
  title: 'Component library/Molecules/Breadcrumbs',
  component: Breadcrumbs,
};

const storybook = {
  homePage: [
    {
      id: 0,
      name: 'Hjem',
      link: './',
    },
  ],
  mobilsubscriptionPage: [
    {
      id: 0,
      name: 'Hjem',
      link: './',
    },
    {
      id: 1,
      name: 'Mobilabonnement',
      link: './hjem/mobilabonnement',
    },
  ],
  familysubscriptionPage: [
    {
      id: 0,
      name: 'Hjem',
      link: './',
    },
    {
      id: 1,
      name: 'Mobilabonnement',
      link: './hjem/mobilabonnement',
    },
    {
      id: 2,
      name: 'Famile',
      link: './hjem/mobilabonnement/familie',
    },
  ],
  setupPage: [
    {
      id: 0,
      name: 'Hjem',
      link: './',
    },
    {
      id: 1,
      name: 'Mobilabonnement',
      link: './hjem/mobilabonnement',
    },
    {
      id: 2,
      name: 'Famile',
      link: './hjem/mobilabonnement/familie',
    },
    {
      id: 3,
      name: 'Oppset',
      link: './hjem/mobilabonnement/familie/oppsett',
    },
  ],
  telephonePage: [
    {
      id: 0,
      name: 'Hjem',
      link: './',
    },
    {
      id: 1,
      name: 'Mobilabonnement',
      link: './hjem/mobilabonnement',
    },
    {
      id: 2,
      name: 'Famile',
      link: './hjem/mobilabonnement/familie',
    },
    {
      id: 3,
      name: 'Konfugurering',
      link: './hjem/mobilabonnement/familie/konfiguration',
    },
    {
      id: 4,
      name: 'Telefon',
      link: './hjem/mobilabonnement/familie/konfiguration/telefon',
    },
  ],
};

export const Default = () => <Breadcrumbs crumbs={storybook.homePage} />;

export const MobileSubscription = () => <Breadcrumbs crumbs={storybook.mobilsubscriptionPage} />;

export const Family = () => <Breadcrumbs crumbs={storybook.familysubscriptionPage} />;

export const Setup = () => <Breadcrumbs crumbs={storybook.setupPage} />;

export const Multi = () => <Breadcrumbs crumbs={storybook.telephonePage} />;
