import React from 'react';
import { useDatePicker } from './contex';
import cn from 'classnames';
import format from './format';

type Props = {
  day: number;
  date: Date;
};

export const DatePickerDay = (props: Props) => {
  const { periodEnd, periodStart, minDate, maxDate } = useDatePicker();

  const disabled =
    (minDate && props.date.getTime() < minDate.getTime()) || (maxDate && props.date.getTime() > maxDate.getTime());

  const selectDate = () => {
    if (periodEnd) {
      if (periodEnd.selectedDate && periodStart.selectedDate) {
        periodStart.setSelectedDate(props.date);
        periodEnd.setSelectedDate(undefined);
      } else if (!periodEnd.selectedDate) {
        if (!periodStart.selectedDate) {
          periodStart.setSelectedDate(props.date);
        } else if (props.date.getTime() < periodStart?.selectedDate?.getTime()) {
          periodStart.setSelectedDate(props.date);
          periodEnd.setSelectedDate(periodStart.selectedDate);
        } else {
          periodEnd.setSelectedDate(props.date);
        }
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

  const isBetween =
    periodStart?.selectedDate &&
    !!(periodStart.selectedDate.getTime() < props.date?.getTime()) &&
    periodEnd?.selectedDate &&
    !!(periodEnd.selectedDate.getTime() > props.date?.getTime());

  return (
    <button
      className={cn('telia-date-picker--day', {
        'telia-date-picker--day__active': isSelected,
        'telia-date-picker--day__inPeriod': isBetween,
        'telia-date-picker--day__disabled': disabled,
      })}
      onClick={selectDate}
      disabled={disabled}
    >
      {props.day}
    </button>
  );
};

export const DatePickerDayPlaceholder = () => {
  return <div className="telia-date-picker--day__placeholder" />;
};
