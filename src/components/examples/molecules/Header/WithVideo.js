import React from 'react';
import { Header } from '@telia/styleguide';

const WithVideo = () => (
    <Header
        iconName="ico_favourites"
        pageTitle="Page Title"
        videoSrc="https://www.youtube.com/embed/-yWZdilQQnk?rel=1&amp;controls=1&amp;showinfo=1&amp;autoplay=0"
        videoTitle="A samle video">
        Preamble; an introductory and <a className="link">expressionary</a> statement in a document that explains the document's purpose and
        underlying philosophy.
    </Header>
);

export default WithVideo;