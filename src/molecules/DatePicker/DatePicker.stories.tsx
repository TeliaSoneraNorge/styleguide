import React, { useState, useEffect } from 'react';
import { DatePicker } from './DatePicker';
import { DatePickerMenu } from './DatePickerMenu';
import { withDesign } from 'storybook-addon-designs';

export default {
  component: DatePicker,
  title: 'Component library/Molecules/DatePicker',
  subComponents: { DatePickerMenu },
  decorators: [withDesign],
};

export const Default = () => {
  return (
    <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
      <DatePicker intialValue="2020-11-15" />
      <DatePicker intialValue="2010-06-1" />
    </div>
  );
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/hlfzOTYFuNb8n7YrLfhw90/Date-picker?node-id=0%3A1',
  },
};
