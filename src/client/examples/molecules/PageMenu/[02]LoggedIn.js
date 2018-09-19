import React from 'react';
import { PageMenu } from '@telia/styleguide';

const menuLinks = [
    {
        heading: 'Privat',
        loggedInLinks: [
            { text: 'Forsiden', url: '/', iconName: 'ico_home' },
            { text: 'Dataforbruk', url: '/', iconName: 'ico_statistics' },
            { text: 'Faktura', url: '/', 'notification': 1, iconName: 'ico_default_doc' },
            { text: 'Mer fra min side', url: '/', iconName: 'ico_contacts' }
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
            { text: 'Bedrift Forsiden', url: '/', iconName: 'ico_home' },
            { text: 'Dataforbruk', url: '/', iconName: 'ico_statistics' },
            { text: 'Faktura', url: '/', 'notification': 1, iconName: 'ico_default_doc' },
            { text: 'Mer fra min side', url: '/', iconName: 'ico_contacts' }
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
                menuSelectedTabIndex={this.state.menuTabIndex}
                searchUrl="#PageMenu" />
        );
    }
}
