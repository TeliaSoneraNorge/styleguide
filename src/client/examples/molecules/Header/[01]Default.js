import React from 'react';
import { Header } from '@telia/styleguide';

const DefaultHeader = () => (
    <Header
        iconUrl="/public/icons/ico_favourites.svg"
        runningTitle="Running Title"
        pageTitle="Page Title">
        Preamble; an introductory and expressionary statement in a document that explains the document's purpose and
        underlying philosophy.
    </Header>
);

export default DefaultHeader;