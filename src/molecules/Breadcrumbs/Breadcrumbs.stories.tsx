import React from 'react';
import { Breadcrumbs } from '../../index';

export default {
  title: 'Component library/Molecules/Breadcrumbs',
  component: Breadcrumbs,
};

const storybook = {
  home: [
    {
      id: 0,
      name: 'Hjem',
      link: './',
    },
  ],
  mobilsubscription: [
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
  familysubscription: [
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
  dotted: [
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
      link: './hjem/mobilabonnement/familie',
    },
  ],
  multi: [
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
      link: './hjem/mobilabonnement/familie',
    },
    {
      id: 4,
      name: 'Telefonkonfigurering',
      link: './hjem/mobilabonnement/familie',
    },
  ],
};

export const Default = () => <Breadcrumbs crumbs={storybook.home} />;

export const MobileSubscription = () => <Breadcrumbs crumbs={storybook.mobilsubscription} />;

export const Family = () => <Breadcrumbs crumbs={storybook.familysubscription} />;

export const Setup = () => <Breadcrumbs crumbs={storybook.dotted} />;

export const Multi = () => <Breadcrumbs crumbs={storybook.multi} />;
