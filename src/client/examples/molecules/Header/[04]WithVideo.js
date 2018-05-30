import React from 'react';
import { Header } from '@telia/styleguide';

const WithVideo = () => (
    <Header
        iconUrl="/public/icons/ico_favourites.svg"
        pageTitle="Page Title"
        videoSrc="https://www.youtube.com/embed/-yWZdilQQnk?rel=1&amp;controls=1&amp;showinfo=1&amp;autoplay=0">
        Preamble; an introductory and <a className="link">expressionary</a> statement in a document that explains the document's purpose and
        underlying philosoph
    </Header>
);

export default WithVideo;