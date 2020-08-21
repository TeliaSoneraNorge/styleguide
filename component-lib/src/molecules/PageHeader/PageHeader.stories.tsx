import React from 'react';
import { PageHeader } from '../../index';

export default {
  title: 'Component library/Molecules/PageHeader',
  component: PageHeader,
};


export const Default = () => {

  return (
    <PageHeader
      menuId='string'
      cartItemCount={2}
      logoUrl='string'
      logoTitle='string'
      logoImageDesktopPath='string'
      logoImageDesktopPathInverted='string'
    />
  )
}

