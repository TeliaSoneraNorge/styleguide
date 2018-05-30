import React from 'react';
import { PageMenu } from '@telia/styleguide';

const links = [
    { text: 'Forsiden', url: '/', forLoggedInUsers: true, icon: '/public/icons/ico_home.svg' },

    { text: 'Mobilabonnement og priser', url: '/' },
    { text: 'Mobiltelefoner og tilbehor', url: '/' },
    { text: 'Mobilt bredband', url: '/' },
    { text: 'Dekning', url: '/' },
    { text: 'Bedrift', url: '/' },
    { text: 'Kontakt oss', url: '/' },
];

const DefaultPageMenu = () => (
    <PageMenu
        menuId="page-menu--example-1"
        links={links}
        isExpanded />
);

export default DefaultPageMenu;