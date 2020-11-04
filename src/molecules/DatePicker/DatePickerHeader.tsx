import React from 'react';
import { useDatePicker } from './DatePicker';
import { Button } from '../../business/Button';

export const DatePickerHeader = () => {
  const { setMonth, setYear, month, year } = useDatePicker();

  const prev = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    }
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    }
  };
  return (
    <div className="telia-date-picker--header">
      <Button onClick={prev} icon="arrow-left" kind="secondary-text" /> {monthNames[month]} {year}
      <Button icon="arrow-right" kind="secondary-text" />
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
