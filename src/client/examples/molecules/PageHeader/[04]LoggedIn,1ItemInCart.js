import React from 'react';
import { PageHeader } from '@telia/styleguide';

const menuLinks = [
    {
        heading: 'Fake',
        loggedInLinks: [
            { text: 'A fake menu item', url: '#' }
        ],
        loggedOutLinks: []
    }
];

function toggleCart() {
    alert('You need to add the cart yourself for now');
}


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
        isLoggedIn
        toggleCart={toggleCart} />
);

export default LoggedIn1Item;