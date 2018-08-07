import React from 'react';
import { PageMenu } from '@telia/styleguide';

const menuLinks = [
    {
        heading: 'Privat',
        loggedInLinks: [
            { text: 'Forsiden', url: '/', iconSvg: <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 591.91 591.7"><path d="M549.42 246.77l-234-234a43.85 43.85 0 0 0-61.87 0l-223 223-11 11c-34 34-22.5 61.87 25.62 61.87h8.22V591.7h145.84v-181a21.88 21.88 0 0 1 21.88-21.85h126.75a21.88 21.88 0 0 1 21.88 21.88v181h145.82v-283.1h8.22c48.12 0 59.7-27.84 25.64-61.86z"/></svg> },
            { text: 'Dataforbruk', url: '/', iconSvg: <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 670.83 670.83"><path d="M597.92 36.42A36.45 36.45 0 0 0 561.42 0h-72.88a36.46 36.46 0 0 0-36.46 36.42v546.92h145.84zM408.33 255.21a36.45 36.45 0 0 0-36.46-36.46h-72.91a36.45 36.45 0 0 0-36.46 36.46v328.13h145.83zM218.75 473.96a36.46 36.46 0 0 0-36.46-36.46h-72.87a36.46 36.46 0 0 0-36.5 36.46v109.38h145.83zm428.21 153.13H21.88a21.875 21.875 0 1 0 0 43.75h625.08a21.88 21.88 0 1 0 0-43.75z"/></svg> },
            { text: 'Faktura', url: '/', 'notification': 1, iconSvg:<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 670.83 670.83"><path d="M495.84 627.09a43.87 43.87 0 0 1-43.75 43.75H43.75A43.87 43.87 0 0 1 0 627.09V43.75A43.88 43.88 0 0 1 43.75 0h273.64v91.69a87.5 87.5 0 0 0 87.47 87.49h91v447.91z"/><path d="M373.92 122.62a43.46 43.46 0 0 0 30.9 12.8h91L361.14 0v91.69a43.61 43.61 0 0 0 12.78 30.93z"/></svg> },
            { text: 'Mer fra min side', url: '/', iconSvg: <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 567.01 536.01"><path d="M440.67 157.71a157.46 157.46 0 0 1-67.95 129.56c180 39.29 190.52 138.93 193.09 198.23.54 12.67-8.79 27.8-21 31-31 8.13-93.57 19.5-261.83 19.5s-230.8-11.36-261.85-19.5c-12.28-3.22-21.6-18.34-21.06-31 2.56-59.3 13.12-158.94 193.1-198.23a157.69 157.69 0 1 1 247.5-129.56z"/></svg> }
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
            { text: 'Bedrift Forsiden', url: '/', iconSvg: <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 591.91 591.7"><path d="M549.42 246.77l-234-234a43.85 43.85 0 0 0-61.87 0l-223 223-11 11c-34 34-22.5 61.87 25.62 61.87h8.22V591.7h145.84v-181a21.88 21.88 0 0 1 21.88-21.85h126.75a21.88 21.88 0 0 1 21.88 21.88v181h145.82v-283.1h8.22c48.12 0 59.7-27.84 25.64-61.86z"/></svg> },
            { text: 'Dataforbruk', url: '/', iconSvg: <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 670.83 670.83"><path d="M597.92 36.42A36.45 36.45 0 0 0 561.42 0h-72.88a36.46 36.46 0 0 0-36.46 36.42v546.92h145.84zM408.33 255.21a36.45 36.45 0 0 0-36.46-36.46h-72.91a36.45 36.45 0 0 0-36.46 36.46v328.13h145.83zM218.75 473.96a36.46 36.46 0 0 0-36.46-36.46h-72.87a36.46 36.46 0 0 0-36.5 36.46v109.38h145.83zm428.21 153.13H21.88a21.875 21.875 0 1 0 0 43.75h625.08a21.88 21.88 0 1 0 0-43.75z"/></svg> },
            { text: 'Faktura', url: '/', 'notification': 1, iconSvg: <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 670.83 670.83"><path d="M495.84 627.09a43.87 43.87 0 0 1-43.75 43.75H43.75A43.87 43.87 0 0 1 0 627.09V43.75A43.88 43.88 0 0 1 43.75 0h273.64v91.69a87.5 87.5 0 0 0 87.47 87.49h91v447.91z"/><path d="M373.92 122.62a43.46 43.46 0 0 0 30.9 12.8h91L361.14 0v91.69a43.61 43.61 0 0 0 12.78 30.93z"/></svg> },
            { text: 'Mer fra min side', url: '/', iconSvg: <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 567.01 536.01"><path d="M440.67 157.71a157.46 157.46 0 0 1-67.95 129.56c180 39.29 190.52 138.93 193.09 198.23.54 12.67-8.79 27.8-21 31-31 8.13-93.57 19.5-261.83 19.5s-230.8-11.36-261.85-19.5c-12.28-3.22-21.6-18.34-21.06-31 2.56-59.3 13.12-158.94 193.1-198.23a157.69 157.69 0 1 1 247.5-129.56z"/></svg> }
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
