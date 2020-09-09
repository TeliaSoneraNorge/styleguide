import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import AllIcons from '../assets/allicons/AllIcons';

import '../src/index.pcss';
import '../src/business.pcss';

addDecorator(withKnobs);

addDecorator(s => (
  <>
    <AllIcons />
    {s()}
  </>
));

addParameters({
  options: {
    // Explicitly setting `showPanel` to true here lets us individually disable it
    // for particular stories that don't use addons.
    // See: https://github.com/storybookjs/storybook/issues/7149
    showPanel: true,

    storySort: {
      order: ['Introduction', 'Component library', 'Examples', 'Business'],
    },
  },
});
