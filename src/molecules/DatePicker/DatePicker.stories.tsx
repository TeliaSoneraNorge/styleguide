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
  const [date1, setDate1] = useState<string | undefined>(undefined);
  const [date2, setDate2] = useState<string | undefined>(undefined);
  const [date3, setDate3] = useState<string | undefined>(undefined);
  const [date4, setDate4] = useState<string | undefined>('2020-05-01');
  const [date5, setDate5] = useState<string | undefined>(undefined);
  const [date6, setDate6] = useState<string | undefined>(undefined);

  return (
    <div style={{ width: '30%', margin: '2rem', display: 'flex', flexDirection: 'column' }}>
      <DatePicker value={date} onSelectDate={setDate} />
      <DatePicker value={date1} onSelectDate={setDate1} />

      <DatePicker size="compact" value={date2} onSelectDate={setDate2} />

      <div style={{ marginTop: '2rem ' }}>
        <div>With upper and lower bound</div>
        <DatePicker
          size="compact"
          maxDate="2021-02-05"
          minDate={format.dateToString(new Date())}
          value={date3}
          onSelectDate={setDate3}
        />
        <br />
        <div>Only 2020</div>
        <DatePicker size="compact" maxDate="2020-12-31" minDate="2020-01-01" value={date4} onSelectDate={setDate4} />
      </div>
      <div style={{ marginTop: '2rem ' }}>
        <div>Custom month labels</div>
        <DatePicker
          monthLabels={['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sept', 'Okt', 'Nov', 'Des']}
          value={date5}
          onSelectDate={setDate5}
        />
      </div>

      <div style={{ marginTop: '2rem ' }}>
        <div>Custom day labels</div>
        <DatePicker value={date6} onSelectDate={setDate6} dayLabels={['M', 'T', 'W', 'T', 'F', 'S', 'S']} />
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
          maxDate="2021-08-08"
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

export const ControlledOpenState = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const period1 = usePeriod();
  const period2 = usePeriod();

  return (
    <div style={{ width: '30%', margin: '2rem', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginTop: '2rem ' }}>
        <div>Close calendar when dateTo is set</div>
        <PeriodPicker
          open={open1}
          setOpen={setOpen1}
          size="compact"
          period={period1.period}
          onSelectDateFrom={period1.setDateFrom}
          onSelectDateTo={(to) => {
            period1.setDateTo(to);
            if (to) {
              setTimeout(() => setOpen1(false), 200);
            }
          }}
          maxDate="2021-08-08"
          minDate={format.dateToString(new Date())}
        />
      </div>

      <div style={{ marginTop: '2rem ' }}>
        <div>Calendar with close button</div>
        <PeriodPicker
          open={open2}
          setOpen={setOpen2}
          size="compact"
          period={period2.period}
          onSelectDateFrom={period2.setDateFrom}
          onSelectDateTo={period2.setDateTo}
          maxDate="2021-08-08"
          minDate={format.dateToString(new Date())}
          options={<Button label="Søk" onClick={() => setOpen2(false)} />}
        />
      </div>
    </div>
  );
};

export const DateTimePicker = () => {
  const [timeFrom, setTimeFrom] = useState('00:00');
  const [timeTo, setTimeTo] = useState('00:00');

  return (
    <div style={{ height: '100%', width: '30%', margin: '2rem', display: 'flex', flexDirection: 'column' }}>
      <PeriodPicker
        size="compact"
        time
        timeFrom={timeFrom}
        onSelectedTimeFrom={setTimeFrom}
        timeTo={timeTo}
        onSelectedTimeTo={setTimeTo}
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
