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
  const [date, setDate] = useState<string | undefined>('2020-11-06');
  return (
    <div style={{ width: '30%', margin: '2rem', display: 'flex', flexDirection: 'column' }}>
      <DatePicker value={date} />
      <DatePicker value="2010-06-01" onSelectDate={setDate} />
      <DatePicker size="compact" />
    </div>
  );
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/hlfzOTYFuNb8n7YrLfhw90/Date-picker?node-id=0%3A1',
  },
};
