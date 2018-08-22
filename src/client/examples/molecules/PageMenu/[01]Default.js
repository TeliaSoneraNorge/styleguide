import React from 'react';
import { PageMenu,  Button } from '@telia/styleguide';

const ContentAboveItemsPrivat = () => (
    <div>
        <p className="paragraph">Sjekk forbruket og abonnementet ditt, fakturaer og innstillinger.</p>
        <Button text="Logg inn" kind="primary" />
    </div>
);

const ContentAboveItemsBedrift = () => (
    <div>
        <p className="paragraph">Administrer dine abonnement og tjenester og få oversikt over fakturaer og rapporter.</p>
        <Button text="Logg inn" kind="primary" />
    </div>
);

const menuLinks = [
    {
        heading: 'Privat',
        contentAboveItems: <ContentAboveItemsPrivat />,
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
        contentAboveItems: <ContentAboveItemsBedrift />,
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
                isLoggedIn={false}
                onTabSelect={(index) => this.selectMenuTabIndex(index)}
                menuSelectedTabIndex={this.state.menuTabIndex}/>
        );
    }
}