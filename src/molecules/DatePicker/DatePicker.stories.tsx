import React, { useState } from 'react';
import { DatePicker } from './DatePicker';
import { DatePickerMenu } from './DatePickerMenu';
import { PeriodPicker } from './PeriodPicker';

import { withDesign } from 'storybook-addon-designs';

export default {
  component: DatePicker,
  title: 'Component library/Molecules/DatePicker',
  subComponents: { DatePickerMenu, PeriodPicker },
  decorators: [withDesign],
};

export const Default = () => {
  const [date, setDate] = useState<string | undefined>('2020-11-06');
  return (
    <div style={{ width: '30%', margin: '2rem', display: 'flex', flexDirection: 'column' }}>
      <DatePicker value={date} />
      <DatePicker value="2010-06-01" onSelectDate={setDate} />
      <DatePicker size="compact" />
      <div style={{ marginTop: '2rem ' }}>
        <div>Custom month labels</div>
        <DatePicker
          value={date}
          monthLabels={['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sept', 'Okt', 'Nov', 'Des']}
        />
      </div>

      <div style={{ marginTop: '2rem ' }}>
        <div>Custom day labels</div>
        <DatePicker value={date} dayLabels={['M', 'T', 'W', 'T', 'F', 'S', 'S']} />
      </div>

      <PeriodPicker size="compact" />
      <PeriodPicker
        size="compact"
        period={{
          start: '2020-11-06',
          end: '2020-11-09',
        }}
      />
    </div>
  );
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/hlfzOTYFuNb8n7YrLfhw90/Date-picker?node-id=0%3A1',
  },
};
