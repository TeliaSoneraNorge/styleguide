import React from 'react';
import { PageHeader } from '@telia/styleguide';

const menuLinks = [
    { text: 'A fake menu item', url: '#' }
];

const LoggedInNoItems = () => (
    <PageHeader
        menuId='page-header-menu--example-3'
        logoUrl='#'
        logoTitle='Telia logo'
        logoImageDesktopPath='/public/images/logo/logo.svg'
        logoImageDesktopPathInverted='/public/images/logo/logo-inverted.svg'
        cartItemCount={0}
        menuLinks={menuLinks}
        loggedInUserName='Maria'
        isLoggedIn
    />
);

export default LoggedInNoItems;