import React from 'react';
import { useDatePicker } from './DatePicker';

export const DatePickerHeader = () => {
  const context = useDatePicker();

  return (
    <div className="telia-date-picker--header">
      {monthNames[context.month]} {context.year}
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
