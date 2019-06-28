import React from 'react';
import { Header } from '@telia/styleguide';

const WithContentOverlap = () => (
  <div>
    <Header iconName="ico_favourites" pageTitle="Page Title" withContentOverlap={true}>
      Preamble; an introductory and <a className="link">expressionary</a> statement in a document that explains the
      document's purpose and underlying philosophy.
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

export default WithContentOverlap;
