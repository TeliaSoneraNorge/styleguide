import React from 'react';
import { PageHeader } from '@telia/styleguide';

const HiddenMenu = () => (
    <PageHeader
        hideMenu={true}
        menuId="page-header-menu--example-6"
        logoUrl="#"
        logoTitle="Telia logo"
        logoImageDesktopPath="/public/images/logo/logo.svg"
        logoImageDesktopPathInverted="/public/images/logo/logo-inverted.svg"
        cartItemCount={0}
        searchUrl="#PageHeader" />
);

export default HiddenMenu;