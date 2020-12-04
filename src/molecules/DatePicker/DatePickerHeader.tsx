import React from 'react';
import { useDatePicker } from './contex';
import { Button } from '../../business/Button';

export const DatePickerHeader = () => {
  const { prev, next, periodStart, periodEnd } = useDatePicker();

  return (
    <div className="telia-date-picker--header">
      <Button onClick={prev} icon="arrow-left" kind="secondary-text" size="compact" />
      {periodEnd ? (
        <div className="telia-date-picker--header--labels">
          <div>
            {monthNames[periodStart.month]} {periodStart.year}
          </div>
          <div>
            {monthNames[periodEnd.month]} {periodEnd.year}
          </div>
        </div>
      ) : (
        <div>
          {monthNames[periodStart.month]} {periodStart.year}
        </div>
      )}

      <Button onClick={next} icon="arrow-right" kind="secondary-text" size="compact" />
    </div>
  );
};

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
