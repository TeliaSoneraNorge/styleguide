import React from 'react';
import { useDatePicker } from './DatePicker';
import cn from 'classnames';
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
          context.selectedDate && context.selectedDate.getTime() === props.date.getTime(),
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
