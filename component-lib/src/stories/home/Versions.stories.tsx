import React from 'react';

import { Header } from '../../index';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../../../VERSIONS.md' or it... Remove this comment to see the full error message
import versionsMd from '../../../../VERSIONS.md';

export default {
  title: 'Introduction/Styleguide',
  parameters: {
    options: {
      showPanel: false,
    },
  },
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
