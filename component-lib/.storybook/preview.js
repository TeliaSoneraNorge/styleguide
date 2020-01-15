import React from 'react';
import { addDecorator, setAddon, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import JSXAddon from 'storybook-addon-jsx';
import AllIcons from '../assets/allicons/AllIcons';

setAddon(JSXAddon);

addDecorator(withKnobs);

addDecorator(s => (
  <>
    <AllIcons />
    {s()}
  </>
));

/**
 *
 * This sorts the overall chapters into a specific order.
 * Other levels (components, stories) are sorted alphabetically.
 *
 * Reference: https://github.com/storybookjs/storybook/issues/9392
 *
 */
const chapterOrder = ['Introduction', 'Component library', 'Business'];

addParameters({
  options: {
    storySort: (a, b) => {
      const chapterA = a[1].kind.substr(0, a[1].kind.indexOf('|'));
      const chapterB = b[1].kind.substr(0, b[1].kind.indexOf('|'));
      // If the chapters are different, compare the chapters only:
      if (chapterA !== chapterB) {
        return chapterOrder.indexOf(chapterA) - chapterOrder.indexOf(chapterB);
      }
      return a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id);
    },
  },
});
