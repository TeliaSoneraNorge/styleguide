import React from 'react';
import { addParameters, addDecorator, configure, setAddon } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import teliaTheme from './teliaTheme';
import JSXAddon from 'storybook-addon-jsx';
import AllIcons from '../assets/allicons/AllIcons';

setAddon(JSXAddon);

// Default decorators
addDecorator(withKnobs);
addDecorator(s => (
  <>
    <AllIcons />
    {s()}
  </>
));

addParameters({
  options: {
    theme: teliaTheme,
  },
});

/**
 * Quick way to load all stories:
 */
// configure([
//   require.context('../stories', true, /\.stories\.(js|ts|tsx)$/),
//   require.context('../src', true, /\.stories\.(js|ts|tsx)$/)
// ], module);

/**
 * For controlling import order -- to make sure stories show up in the
 * order we want them to.
 */
const requireGlobalStory = require.context('../stories', true, /\.stories\.(js|ts|tsx)$/);
const requireComponentStory = require.context('../src', true, /\.stories\.(js|ts|tsx)$/);

configure(() => {
  requireGlobalStory.keys().forEach(filename => requireGlobalStory(filename));
  requireComponentStory.keys().forEach(filename => requireComponentStory(filename));
}, module);
