import React from 'react';
import { Header } from '@telia/styleguide';

const WithMask = () => (
  <Header iconName="ico_favourites" runningTitle="Running Title" pageTitle="Page Title" withMask>
    Preamble; an introductory and <a className="link">expressionary</a> statement in a document that explains the
    document&#39;s purpose and underlying philosophy.
  </Header>
);

export default WithMask;
