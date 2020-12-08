import React, { useState } from 'react';
import { DatePicker } from './DatePicker';
import { DatePickerMenu } from './DatePickerMenu';
import { PeriodPicker } from './PeriodPicker';
import { withDesign } from 'storybook-addon-designs';
import format from './format';
import { Button } from '../../business';
import { usePeriod } from './utils/usePeriod';

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
        <div>With upper and lower bound</div>
        <DatePicker size="compact" maxDate="2021-02-05" minDate={format.dateToString(new Date())} />
        <br />
        <div>Only 2020</div>
        <DatePicker size="compact" maxDate="2020-12-31" minDate="2020-01-01" value="2020-05-01" />
      </div>
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
    </div>
  );
};

export const Period = () => {
  const period1 = usePeriod();
  const period2 = usePeriod();

  return (
    <div style={{ width: '30%', margin: '2rem', display: 'flex', flexDirection: 'column' }}>
      <PeriodPicker size="compact" />
      <div style={{ marginTop: '2rem ' }}>
        <PeriodPicker
          size="compact"
          period={{
            start: '2020-11-06',
            end: '2020-12-09',
          }}
        />
      </div>
      <div style={{ marginTop: '2rem ' }}>
        <div>With upper and lower bound</div>
        <PeriodPicker
          size="compact"
          period={period1.period}
          onSelectDateFrom={period1.setDateFrom}
          onSelectDateTo={period1.setDateTo}
          maxDate="2021-02-05"
          minDate={format.dateToString(new Date())}
        />
      </div>
      <div style={{ marginTop: '2rem ' }}>
        <div>With custom options</div>
        <PeriodPicker
          size="compact"
          period={period2.period}
          onSelectDateFrom={period2.setDateFrom}
          onSelectDateTo={period2.setDateTo}
          options={
            <>
              <Button label="Siste 7 dager" kind="ghost" size="compact" onClick={period2.pastDays(6)} />
              <Button label="Neste 7 dager" kind="ghost" size="compact" onClick={period2.nextDays(6)} />
            </>
          }
        />
      </div>
    </div>
  );
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/hlfzOTYFuNb8n7YrLfhw90/Date-picker?node-id=0%3A1',
  },
};
