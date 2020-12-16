import { PeriodParameters } from './types';
import { useInput } from './useInput';

export const useSecondPeriod = (
  params: PeriodParameters & {
    year: number;
    month: number;
  },
  skip?: boolean
) => {
  const { selectedDate, setSelectedDate, inputValue, setInputValue } = useInput({ ...params });
  const numberOfDays = new Date(params.year, params.month + 1, 0).getDate();
  const dayOfStart = new Date(params.year, params.month, 1).getDay();

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
