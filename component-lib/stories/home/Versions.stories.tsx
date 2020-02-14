import React from 'react';

import { Header } from '../../src/index';

import versionsMd from '../../../VERSIONS.md';

export default {
  title: 'Introduction/Styleguide',
};

export const Versions = () => (
  <div>
    <Header iconName="ico_code-2" pageTitle="Versions">
      <p className="paragraph">This content was read from VERSIONS.md in the repository.</p>
    </Header>

    <div className="container container--small container--extra-margin-bottom">
      <div dangerouslySetInnerHTML={{ __html: versionsMd }}></div>
    </div>
  </div>
);
