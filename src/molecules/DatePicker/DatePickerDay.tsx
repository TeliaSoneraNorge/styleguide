import React from 'react';
import { useDatePicker } from './DatePicker';
import cn from 'classnames';
import format from './format';
type Props = {
  day: number;
  date: Date;
};
export const DatePickerDay = (props: Props) => {
  const { periodEnd, periodStart } = useDatePicker();

  const selectDate = () => {
    if (periodEnd) {
      if (periodEnd.selectedDate && periodStart.selectedDate) {
        periodStart.setSelectedDate(props.date);
        periodEnd.setSelectedDate(undefined);
      } else if (!periodEnd.selectedDate) {
        periodEnd.setSelectedDate(props.date);
      }
    } else {
      periodStart.setSelectedDate(props.date);
    }
  };

  const isSelected =
    (periodStart.selectedDate && format.dateToString(periodStart.selectedDate) === format.dateToString(props.date)) ||
    (periodEnd &&
      periodEnd.selectedDate &&
      format.dateToString(periodEnd.selectedDate) === format.dateToString(props.date));

  return (
    <button
      className={cn('telia-date-picker--day', {
        'telia-date-picker--day__active': isSelected,
      })}
      onClick={selectDate}
    >
      {props.day}
    </button>
  );
};

export const DatePickerDayPlaceholder = () => {
  return <div className="telia-date-picker--day__placeholder" />;
};
