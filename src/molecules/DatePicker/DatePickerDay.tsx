import React from 'react';
import { useDatePicker } from './DatePicker';
import cn from 'classnames';
import format from './format';
type Props = {
  day: number;
  date: Date;
};
export const DatePickerDay = (props: Props) => {
  const context = useDatePicker();
  return (
    <button
      className={cn('telia-date-picker--day', {
        'telia-date-picker--day__active':
          context.selectedDate && format.dateToString(context.selectedDate) === format.dateToString(props.date),
      })}
      onClick={() => context.setSelectedDate(props.date)}
    >
      {props.day}
    </button>
  );
};

export const DatePickerDayPlaceholder = () => {
  return <div className="telia-date-picker--day__placeholder" />;
};
