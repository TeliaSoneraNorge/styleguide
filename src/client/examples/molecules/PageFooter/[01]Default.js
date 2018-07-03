import React from 'react';
import { PageFooter } from '@telia/styleguide';

const links = [
    { text: 'Om Telia', url: '#' },
    { text: 'Telia butikker', url: '#' },
    { text: 'Presse', url: '#' },
    { text: 'Jobb i Telia', url: '#' },
    { text: 'Personvern hos Telia', url: '#'}
];

const DefaultPageFooter = () => (
    <PageFooter
        links={links}
        chatLinkText="Chat med Otelia"
        chatLink="#"
        chatImgSrc="/public/images/Halvfigur_blunkefjes.svg"/>
);

export default DefaultPageFooter;