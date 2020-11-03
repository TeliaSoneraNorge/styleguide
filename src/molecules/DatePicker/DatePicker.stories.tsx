import React, { useState, useEffect } from 'react';
import { DatePicker } from './DatePicker';
import { action } from '@storybook/addon-actions';
import { withDesign } from 'storybook-addon-designs';

export default {
  component: DatePicker,
  title: 'Component library/Molecules/DatePicker',
  subComponents: {},
  decorators: [withDesign],
};

export const Default = () => {
  return (
    <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
      <DatePicker />
      <DatePicker />
    </div>
  );
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/hlfzOTYFuNb8n7YrLfhw90/Date-picker?node-id=0%3A1',
  },
};
