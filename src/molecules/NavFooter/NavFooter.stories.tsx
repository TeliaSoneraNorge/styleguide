import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { NavFooter, NavFooterItem } from './index';
import { action } from '@storybook/addon-actions';

storiesOf('Component library/Molecules/NavFooter', module).add('Default', () => {
  return (
    <NavFooter>
      <NavFooterItem onClick={action('heo')} icon="abroad" />
      <NavFooterItem onClick={action('heo')} icon="abroad" />
      <NavFooterItem onClick={action('heo')} icon="abroad" />
    </NavFooter>
  );
});
