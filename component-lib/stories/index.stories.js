import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '../src/atoms/Button';
import { Welcome } from '@storybook/react/demo';
import '!style-loader!postcss-loader!../src/atoms/Button/Button.pcss';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button text="Hello Button" onClick={action('clicked')} />)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')} text="😀 😎 👍 💯" />
  ));
