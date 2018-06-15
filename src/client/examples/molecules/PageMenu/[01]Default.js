import React from 'react';
import { PageMenu } from '@telia/styleguide';

const menuLinks = [
    {
        heading: 'Privat',
        loggedInLinks: [],
        loggedOutLinks: [
            { text: 'Mobilabonnement og priser', url: '/' },
            { text: 'Mobiltelefoner og tilbehor', url: '/' },
            { text: 'Mobilt bredband', url: '/' },
            { text: 'Dekning', url: '/' },
            { text: 'Bedrift', url: '/' },
            { text: 'Kontakt oss', url: '/' }
        ],
    },
    {
        heading: 'Bedrift',
        loggedInLinks: [],
        loggedOutLinks: [
            { text: 'Bedrift 1', url: '/' },
            { text: 'Bedrift 2', url: '/' },
            { text: 'Bedrift 3', url: '/' },
            { text: 'Kontakt oss', url: '/' }
        ]
    }
];

export default class DefaultPageMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = { menuTabIndex: 0 };
    }
    selectMenuTabIndex(index) {
        this.setState({ menuTabIndex: index });
    }
    render() {
        return (
            <PageMenu
                menuId="page-menu--example-1"
                menuLinks={menuLinks}
                isExpanded
                textAboveLoginButton="Sjekk forbruket og abonnementet ditt, fakturaer og innstillinger."
                isLoggedIn={false}
                showButtons={true}
                onTabSelect={(index) => this.selectMenuTabIndex(index)}
                menuSelectedTabIndex={this.state.menuTabIndex} />
        );
    }
}