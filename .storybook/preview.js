import React from 'react';
import AllIcons from '../assets/allicons/AllIcons';

import '../src/index.pcss';
import '../src/business.pcss';

export default {
  decorators: [
    (s) => (
      <>
        <AllIcons />
        {s()}
      </>
    ),
  ],
  parameters: {
    options: {
      // Explicitly setting `showPanel` to true here lets us individually disable it
      // for particular stories that don't use addons.
      // See: https://github.com/storybookjs/storybook/issues/7149
      showPanel: true,

      storySort: {
        order: ['Introduction', 'Component library', 'Examples', 'Business'],
      },
    },
  },
};
