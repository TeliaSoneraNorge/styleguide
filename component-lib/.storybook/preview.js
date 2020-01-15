import React from 'react';
import { addDecorator, setAddon } from '@storybook/react';
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
