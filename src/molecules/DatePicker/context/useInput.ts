import { PeriodParameters } from './types';
import { useState, useEffect } from 'react';
import format from '../format';

export const useInput = (params: PeriodParameters) => {
  const [inputValue, setInputValue] = useState(params.value);
  const [selectedDate, setSelectedDate] = useState(inputValue ? new Date(inputValue) : undefined);

  useEffect(() => {
    setInputValue(params.value);
  }, [params.value]);

  useEffect(() => {
    if (inputValue && inputValue.length === 10) {
      if (!selectedDate || inputValue !== format.dateToString(selectedDate)) {
        setSelectedDate(new Date(inputValue.split('.').reverse().join('-')));
      }
    }
  }, [inputValue]);

  useEffect(() => {
    if (!params.calendarOpen) {
      params.onSelectDate?.(selectedDate ? format.dateToString(selectedDate) : undefined);
    }
  }, [params.calendarOpen]);

  useEffect(() => {
    if (selectedDate) {
      if (params.dateIsInRange(selectedDate)) {
        // console.log('set new input value', format.dateToString(selectedDate));
        params.onSelectDate?.(format.dateToString(selectedDate));
        setInputValue(format.dateToString(selectedDate));
      }
    } else {
      setInputValue('');
      params.onSelectDate?.(undefined);
    }
  }, [selectedDate]);

  return { selectedDate, setSelectedDate, inputValue, setInputValue };
};
