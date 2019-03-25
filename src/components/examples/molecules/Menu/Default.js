import React from 'react';
import Menu from '../../../../../component-lib/src/molecules/Menu/Menu';
import { Router } from 'react-router-dom';
import { history } from '../../../../utils/historyUtil';

/*Status: In progress*/

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
            { text: 'Kontakt', url: '#' }
        ],
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
            onSearchSubmit={(e, searchQuery) => {} } />
    </Router>
);

export default Default;