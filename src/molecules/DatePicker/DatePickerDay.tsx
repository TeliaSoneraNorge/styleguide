import React from 'react';
import { useDatePicker } from './DatePicker';
import cn from 'classnames';
type Props = {
  day: number;
};
export const DatePickerDay = (props: Props) => {
  const context = useDatePicker();
  return (
    <button
      className={cn('telia-date-picker--day', { 'telia-date-picker--day__active': context.day === props.day })}
      onClick={() => context.setDay(props.day)}
    >
      {props.day}
    </button>
  );
};

export const DatePickerDayPlaceholder = () => {
  return <div className="telia-date-picker--day__placeholder" />;
};
