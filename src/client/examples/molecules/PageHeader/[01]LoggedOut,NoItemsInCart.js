import React from 'react';
import { PageHeader } from '@telia/styleguide';

const menuLinks = [
    { text: 'A fake menu item', url: '#' }
];

const LoggedOutNoItems = () => (
    <PageHeader
        menuId='page-header-menu--example-1'
        logoUrl='#'
        logoTitle='Telia logo'
        logoImageDesktopPath='/public/images/logo/logo.svg'
        logoImageDesktopPathInverted='/public/images/logo/logo-inverted.svg'
        cartItemCount={0}
        menuLinks={menuLinks}
    />
);

export default LoggedOutNoItems;