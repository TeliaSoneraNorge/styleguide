import React from 'react';
import { PageHeader } from '@telia/styleguide';

const menuLinks = [
    { text: 'A fake menu item', url: '#' }
];

const LoggedIn1Item = () => (
    <PageHeader
        menuId="page-header-menu--example-4"
        logoUrl="#"
        logoTitle="Telia logo"
        logoImageDesktopPath="/public/images/logo/logo.svg"
        logoImageDesktopPathInverted="/public/images/logo/logo-inverted.svg"
        cartItemCount={1}
        menuLinks={menuLinks}
        loggedInUserName="Maria"
        isLoggedIn />
);

export default LoggedIn1Item;