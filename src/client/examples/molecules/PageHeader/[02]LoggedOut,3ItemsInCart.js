import React from 'react';
import { PageHeader } from '@telia/styleguide';

const menuLinks = [
    { text: 'A fake menu item', url: '#' }
];

const LoggedOut3Items = () => (
    <PageHeader
        menuId='page-header-menu--example-2'
        logoUrl='#'
        logoTitle='Telia logo'
        logoImageDesktopPath='/public/images/logo/logo.svg'
        logoImageDesktopPathInverted='/public/images/logo/logo-inverted.svg'
        cartItemCount={3}
        menuLinks={menuLinks}
    />
);

export default LoggedOut3Items;