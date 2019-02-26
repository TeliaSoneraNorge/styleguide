import React from 'react';
import { Alert } from '@telia/styleguide';

const links = [
    { text: 'This link might be of interest', url: '#' },
    { text: 'And this one too', url: '#' }
];

const WithLinks = () => (
    <Alert kind="positive" links={links}>
        <p>
            With links. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
        </p>
    </Alert>
);

export default WithLinks;