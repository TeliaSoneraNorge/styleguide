import React from 'react';
import { Router } from 'react-router-dom';
import { Menu } from '@telia/styleguide';
import { history } from '../../../../utils/historyUtil';

const menuLinks = [
    {
        heading: { text: 'Privat', url : '#' },
        links: [
            { text: 'Mobiler og tilbehør', subLinks: [
                { text: 'Mobiltelefoner', url: '#' },
                { text: 'Smartklokker', url: '#' },
                { text: 'Nettbrett', url: '#' },
                { text: 'Tilbehør', url: '#' }
            ] },
            { text: 'Mobilabonnement', url: '#' },
            { text: 'Mobilt bredbånd', url: '#' },
            { text: 'Dekning', url: '#' },
            { text: 'Hjelp', url: '#' }
        ]
    },
    {
        heading: { text: 'Bedrift', url : '#' },
        links: [
            { text: 'Tjenester', url: '#' },
            { text: 'Digitalisering', url: '#' },
            { text: 'Nettbutikk', url: '#' },
            { text: 'Kundeservice', url: '#' }
        ]
    }
];

const Default = () => (
    <Router history={history}>
        <Menu
            loginUrl="#Menu"
            logoUrl="#"
            activeIndex={0}
            menuLinks={menuLinks}
            logoImageDesktopPath={require('../../../../assets/images/logo/logo.svg')}
            logoImageInverseDesktopPath={require('../../../../assets/images/logo/logo-inverted.svg')}
            onSearchSubmit={(e, searchQuery) => {} }
            lockBodyOnMenuOpen />
    </Router>
);

export default Default;