import React from 'react';
import { PageMenu } from '@telia/styleguide';

const menuLinks = [
    {
        heading: 'Privat',
        loggedInLinks: [
            { text: 'Forsiden', url: '/', icon: '/public/icons/ico_home.svg' },
            { text: 'Dataforbruk', url: '/', icon: '/public/icons/ico_statistics.svg' },
            { text: 'Faktura', url: '/', 'notification': 1, icon: '/public/icons/ico_default_doc.svg' },
            { text: 'Mer fra min side', url: '/', icon: '/public/icons/ico_contacts.svg' }
        ],
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
        loggedInLinks: [
            { text: 'Bedrift Forsiden', url: '/', icon: '/public/icons/ico_home.svg' },
            { text: 'Dataforbruk', url: '/', icon: '/public/icons/ico_statistics.svg' },
            { text: 'Faktura', url: '/', 'notification': 1, icon: '/public/icons/ico_default_doc.svg' },
            { text: 'Mer fra min side', url: '/', icon: '/public/icons/ico_contacts.svg' }
        ],
        loggedOutLinks: [
            { text: 'Bedrift 1', url: '/' },
            { text: 'Bedrift 2', url: '/' },
            { text: 'Bedrift 3', url: '/' },
            { text: 'Kontakt oss', url: '/' }
        ]
    }
];

export default class LoggedInPageMenu extends React.Component {
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
                menuId="page-menu--example-2"
                menuLinks={menuLinks}
                isExpanded
                isLoggedIn={true}
                onTabSelect={(index) => this.selectMenuTabIndex(index)}
                menuSelectedTabIndex={this.state.menuTabIndex} />
        );
    }
}
