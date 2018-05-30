import React from 'react';
import { Header } from '@telia/styleguide';

const WithMask = () => (
    <Header
        iconUrl="/public/icons/ico_favourites.svg"
        runningTitle="Running Title"
        pageTitle="Page Title"
        withMask>
        Preamble; an introductory and <a className="link">expressionary</a> statement in a document that explains the document's purpose and
        underlying philosoph
    </Header>
);

export default WithMask;