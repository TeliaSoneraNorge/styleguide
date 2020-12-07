import { useEffect, useState } from 'react';
import format from '../format';
import { PeriodParameters } from './types';

export const useSecondPeriod = (
  params: PeriodParameters & {
    year: number;
    month: number;
  },
  skip?: boolean
) => {
  const [inputValue, setInputValue] = useState(params.value);
  const [selectedDate, setSelectedDate] = useState(inputValue ? new Date(inputValue) : undefined);
  const numberOfDays = new Date(params.year, params.month + 1, 0).getDate();
  const dayOfStart = new Date(params.year, params.month, 1).getDay();

  useEffect(() => {
    if (!params.calendarOpen) {
      params.onSelectDate?.(selectedDate ? format.dateToString(selectedDate) : undefined);
    }
  }, [params.calendarOpen]);

  useEffect(() => {
    if (selectedDate) {
      if (params.dateIsInRange(selectedDate)) {
        setInputValue(format.dateToString(selectedDate));
        params.onSelectDate?.(format.dateToString(selectedDate));
      }
    } else {
      setInputValue('');
      params.onSelectDate?.(undefined);
    }
  }, [selectedDate]);

  const value = {
    year: params.year,
    month: params.month,
    selectedDate,
    setSelectedDate,
    inputValue,
    setInputValue,
    numberOfDays,
    dayOfStart,
  };

  return skip ? undefined : value;
};
