import React from 'react';
import { PageFooter } from 'component-lib';

const links = [
    { text: 'Om Telia', url: '#' },
    { text: 'Telia butikker', url: '#' },
    { text: 'Presse', url: '#' },
    { text: 'Jobb i Telia', url: '#' }
];
const specialLink = { text: 'Personvern og Cookies', url: '#' };

const DefaultPageFooter = () => (
    <PageFooter
        links={links}
        specialLink={specialLink} />
);

export default DefaultPageFooter;