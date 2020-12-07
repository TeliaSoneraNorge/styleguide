import { PeriodParameters } from './types';
import { useEffect, useState } from 'react';
import format from '../format';

export const useFirstPeriod = (params: PeriodParameters) => {
  const [inputValue, setInputValue] = useState(params.value);
  const [selectedDate, setSelectedDate] = useState(inputValue ? new Date(inputValue) : undefined);
  const [year, setYear] = useState(selectedDate?.getFullYear() ?? new Date().getFullYear());
  const [month, setMonth] = useState(selectedDate?.getMonth() ?? new Date().getMonth());

  const numberOfDays = new Date(year, month + 1, 0).getDate();
  const dayOfStart = new Date(year, month, 1).getDay();

  const resetState = () => {
    setYear(selectedDate?.getFullYear() ?? new Date().getFullYear());
    setMonth(selectedDate?.getMonth() ?? new Date().getMonth());
  };

  useEffect(() => {
    if (!params.calendarOpen) {
      params.onSelectDate?.(selectedDate ? format.dateToString(selectedDate) : undefined);
      resetState();
    }
  }, [params.calendarOpen]);

  useEffect(() => {
    if (selectedDate) {
      if (params.dateIsInRange(selectedDate)) {
        setInputValue(format.dateToString(selectedDate));
        setYear(selectedDate.getFullYear());
        setMonth(selectedDate.getMonth());
        params.onSelectDate?.(format.dateToString(selectedDate));
      }
    } else {
      setInputValue('');
      params.onSelectDate?.(undefined);
    }
  }, [selectedDate]);

  const prev = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const next = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const value = {
    year,
    month,
    selectedDate,
    setSelectedDate,
    inputValue,
    setInputValue,
    numberOfDays,
    dayOfStart,
    prev,
    next,
  };

  return value;
};
