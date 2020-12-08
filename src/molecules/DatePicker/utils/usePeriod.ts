import { number } from '@storybook/addon-knobs';
import { useState } from 'react';
import format from '../format';

type Params = {
  initialPeriod?: {
    from: string;
    to: string;
  };
};
export const usePeriod = (params?: Params) => {
  const [dateFrom, setDateFrom] = useState<string | undefined>(params?.initialPeriod?.from);
  const [dateTo, setDateTo] = useState<string | undefined>(params?.initialPeriod?.to);

  const pastDays = (numDays: number) => nextDays(-numDays);

  const nextDays = (numDays: number) => () => {
    const to = new Date();
    to.setDate(to.getDate() + numDays);
    const from = new Date();

    if (to.getTime() < from.getTime()) {
      setDateTo(format.dateToString(from));
      setDateFrom(format.dateToString(to));
    } else {
      setDateTo(format.dateToString(to));
      setDateFrom(format.dateToString(from));
    }
  };
  return {
    nextDays,
    pastDays,
    period: { start: dateFrom, end: dateTo },
    setDateTo,
    setDateFrom,
  };
};
