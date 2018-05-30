import React from 'react';
import { PageMenu } from '@telia/styleguide';

const links = [
    { text: "Forsiden", url: "/", forLoggedInUsers: true, icon: "/public/icons/ico_home.svg" },
    { text: "Dataforbruk", url: "/", forLoggedInUsers: true, icon: "/public/icons/ico_statistics.svg" },
    { text: "Faktura", url: "/", forLoggedInUsers: true, "notification": 1, icon: "/public/icons/ico_default_doc.svg" },
    { text: "Mer fra min side", url: "/", forLoggedInUsers: true, icon: "/public/icons/ico_contacts.svg" },

    { text: "Mobilabonnement og priser", url: "/" },
    { text: "Mobiltelefoner og tilbehor", url: "/" },
    { text: "Mobilt bredband", url: "/" },
    { text: "Dekning", url: "/" },
    { text: "Bedrift", url: "/" },
    { text: "Kontakt oss", url: "/" },
];

const LoggedInPageMenu = () => (
    <PageMenu
        menuId='page-menu--example-2'
        links={links}
        isExpanded
        showLogoutButton
    />
);

export default LoggedInPageMenu;