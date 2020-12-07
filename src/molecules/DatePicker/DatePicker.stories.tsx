import React, { useState } from 'react';
import { DatePicker } from './DatePicker';
import { DatePickerMenu } from './DatePickerMenu';
import { PeriodPicker } from './PeriodPicker';
import { withDesign } from 'storybook-addon-designs';
import format from './format';
import { Button } from '../../business';

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
  const today = new Date();
  const from = new Date();
  from.setDate(from.getDate() + 7);

  const [dateFrom, setDateFrom] = useState<string | undefined>(undefined);
  const [dateTo, setDateTo] = useState<string | undefined>(undefined);

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
          period={{ start: dateFrom, end: dateTo }}
          onSelectDateFrom={setDateFrom}
          onSelectDateTo={setDateTo}
          maxDate="2021-02-05"
          minDate={format.dateToString(new Date())}
        />
      </div>
      <div style={{ marginTop: '2rem ' }}>
        <PeriodPicker
          size="compact"
          period={{ start: dateFrom, end: dateTo }}
          onSelectDateFrom={setDateFrom}
          onSelectDateTo={setDateTo}
          customOptions={
            <>
              <Button
                label="Siste 7 dager"
                kind="ghost"
                size="compact"
                onClick={() => {
                  const to = new Date();
                  const from = new Date();
                  from.setDate(from.getDate() - 6);
                  setDateTo(format.dateToString(to));
                  setDateFrom(format.dateToString(from));
                }}
              />
              <Button
                label="Neste 7 dager"
                kind="ghost"
                size="compact"
                onClick={() => {
                  const to = new Date();
                  to.setDate(to.getDate() + 6);

                  const from = new Date();
                  setDateTo(format.dateToString(to));
                  setDateFrom(format.dateToString(from));
                }}
              />
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
