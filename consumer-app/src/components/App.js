import React from 'react';

import { PageFooter, PageHeader, Heading, Header, AccordionList } from '@telia/styleguide';
import AllIcons from '@telia/styleguide/assets/allicons/AllIcons';
import '@telia/styleguide/index.css';


const accordionListProps = [
    {
        'accordionItems': [
            {
                'id': 'example-1',
                'title': 'A closed accordion heading',
                'children': 'This is the body of the accordion'
            },
            {
                'id': 'example-2',
                'title': 'An open accordion heading',
                'children': 'Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat.'
            }
        ],
        'isExpandedAccordionIndex': 0
    }
];

const App = () =>
    <div>
        <AllIcons />

        <PageHeader
            menuId="main-menu"
            cartItemCount={0}
            logoUrl="/"
            logoTitle="Telia logo"
            logoImageDesktopPath={require('../assets/logo.svg')}
            logoImageDesktopPathInverted={require('../assets/logo-inverted.svg')}
            menuLinks={[
                {
                    heading: 'Privat',
                    loggedInLinks: [
                        { text: 'Home', url: '/', icon: require('../assets/ico_home.svg') }
                    ],
                    loggedOutLinks: [
                        { text: 'Some link', url: '#' },
                        { text: 'Another link', url: '#' },
                        { text: 'And another', url: '#' },
                        { text: 'More stuff here', url: '#' },
                        { text: 'Foobar', url: '#' }
                    ],
                },
                {
                    heading: 'Bedrift',
                    loggedInLinks: [
                        { text: 'Home', url: '/', icon: require('../assets/ico_home.svg') }
                    ],
                    loggedOutLinks: [
                        { text: 'Lorem ipsum', url: '#' },
                        { text: 'Dolor bolor', url: '#' },
                        { text: 'Est best cest', url: '#' },
                        { text: 'La la land', url: '#' }
                    ]
                }
            ]}
            isLoggedIn={false} />

        <Header
            iconName="ico_heart"
            runningTitle="Running Title"
            pageTitle="Styleguide Consumer"
            withMask={true}
            withContentOverlap={false}>
            <p>
                This is a basic React app that consumes the published styleguide NPM package.
                If stuff doesn't work here, it won't work for anyone! 
            </p>
        </Header>

        <div className="container container--medium">
            <Heading level={2} text="Hello world" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    
        <div className="container container--small">
            {accordionListProps.map((props, i) =>
                <AccordionList key={i} {...props} />)}
        </div>
        
        <PageFooter
            links={[
                { text: 'Om Telia', url: '#' },
                { text: 'Telia butikker', url: '#' },
                { text: 'Presse', url: '#' },
                { text: 'Jobb i Telia', url: '#' }
            ]}
            specialLink={{ text: 'Personvern og Cookies', url: '#' }} />
    </div>;

export default App;