import React from 'react';
import { Header } from '../../index';

export default {
  title: 'Component library/Molecules/Header',
  component: Header,
};

export const Default = () => (
  <Header iconName="ico_favourites" runningTitle="Running Title" pageTitle="Page Title">
    Preamble; an introductory and expressionary statement in a document that explains the document&#39;s purpose and
    underlying philosophy.
  </Header>
);

export const HideIconOnDestop = () => (
  <Header iconName="ico_favourites" runningTitle="Running Title" pageTitle="Page Title" hideIconOnDesktop>
    Preamble; an introductory and expressionary statement in a document that explains the document&#39;s purpose and
    underlying philosophy.
  </Header>
);

export const WithContentOverlap = () => (
  <div>
    <Header iconName="ico_favourites" pageTitle="Page Title" withContentOverlap={true}>
      Preamble; an introductory and <a className="link">expressionary</a> statement in a document that explains the
      document&#39;s purpose and underlying philosophy.
    </Header>
    <div className="focus-box">
      <div className="focus-box__content-outer">
        <div className="container container--small container--no-margin">
          <p>
            If you add the <code>--with-content-overlap</code> CSS class then the next piece of content, such as this
            Focus Box, will overlap the header.
          </p>
          <p>
            When using the header with <code>--with-content-overlap</code> it is recommended to use a component like{' '}
            <code>Focus Box</code> as the next component on the page.
          </p>
          <p>This is recommended to keep the overlapping content tall enough to cover the mask.</p>
        </div>
      </div>
    </div>
  </div>
);

export const WithMask = () => (
  <Header iconName="ico_favourites" runningTitle="Running Title" pageTitle="Page Title" withMask>
    Preamble; an introductory and <a className="link">expressionary</a> statement in a document that explains the
    document&#39;s purpose and underlying philosophy.
  </Header>
);

export const WithVideo = () => (
  <Header
    iconName="ico_favourites"
    pageTitle="Page Title"
    videoSrc="https://www.youtube.com/embed/-yWZdilQQnk?rel=1&amp;controls=1&amp;showinfo=1&amp;autoplay=0"
    videoTitle="A samle video"
  >
    Preamble; an introductory and <a className="link">expressionary</a> statement in a document that explains the
    document&#39;s purpose and underlying philosophy.
  </Header>
);