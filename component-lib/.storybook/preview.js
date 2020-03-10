import React from 'react';
import { addDecorator, setAddon, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import JSXAddon from 'storybook-addon-jsx';
import AllIcons from '../assets/allicons/AllIcons';

import '../src/index.pcss';
import '../src/business.pcss';

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
const chapterOrder = [
  { name: 'Introduction', chapters: ['Home', 'Business'] },
  { name: 'Component library' },
  { name: 'Business' },
];

// const chapterOrder = ['Introduction', 'Component library', 'Business'];

addParameters({
  options: {
    // Explicitly setting `showPanel` to true here lets us individually disable it
    // for particular stories that don't use addons.
    // See: https://github.com/storybookjs/storybook/issues/7149
    showPanel: true,

    storySort: (a, b) => {
      const chapterA = a[1].kind.substr(0, a[1].kind.indexOf('|'));
      const chapterB = b[1].kind.substr(0, b[1].kind.indexOf('|'));

      // If the chapters are different, compare the chapters only:
      if (chapterA !== chapterB) {
        return chapterOrder.findIndex(c => c.name === chapterA) - chapterOrder.findIndex(c => c.name === chapterB);
      }

      // If the chapters are identical, check if we have defined a sub-level sorting for that chapter
      const co = chapterOrder.find(c => c.name === chapterA);
      if (co && co.chapters) {
        const subA = a[1].kind.substr(chapterA.length + 1);
        const subB = b[1].kind.substr(chapterB.length + 1);
        return co.chapters.indexOf(subA) - co.chapters.indexOf(subB);
      }

      // Fallback: Sort just by kind
      return a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id);
    },
  },
});
