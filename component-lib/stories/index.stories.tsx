import React from 'react';

import { storiesOf } from '@storybook/react';

/**
 * We can import the .pcss file directly here thanks to the .pcss
 * loader in the storybook-specific .storybook/webpack.config.js.
 */
import '../src/index.pcss';
import '../src/business.pcss';

import HomePage from './home/HomePage';

import Contributing from './business/Contributing';

storiesOf('Introduction|Home', module)
  .add('Greetings', () => <HomePage />)

storiesOf('Introduction|Business', module).add('Contributing', () => <Contributing />);
