import React, { useState, useRef, useEffect } from 'react';
import { ContextValue, ContextProps } from './types';
import { InitialContextValue, defaultMonthLabels, defaultDayLabels } from './data';
import { useFirstPeriod } from './useFirstPeriod';
import { useSecondPeriod } from './useSecondPeriod';
import { useBreakpoint } from '../../../utils/useBreakpoint';

export const DatePickerContext = React.createContext<ContextValue>(InitialContextValue);

export const DatePickerContextProvider: React.FC<ContextProps> = (props) => {
  const datePickerRef = useRef<HTMLDivElement>(null);
  const maxDate = props.maxDate ? new Date(props.maxDate) : undefined;
  const minDate = props.minDate ? new Date(props.minDate) : undefined;
  const sm = useBreakpoint('sm');
  const isMobile = !sm;

  useEffect(() => {
    if (props.dayLabels && props.dayLabels.length !== 7) {
      console.warn(`You provided dayLabels list on props with ${props.dayLabels.length} entries. Expected 7 labels.`);
    }
  }, [props.dayLabels]);

  useEffect(() => {
    if (props.monthLabels && props.monthLabels.length !== 12) {
      console.warn(
        `You provided monthLabels list on props with ${props.monthLabels.length} entries. Expected 12 labels.`
      );
    }
  }, [props.monthLabels]);

  const dateIsInRange = (date: Date) =>
    !(minDate && date.getTime() < minDate.getTime()) && !(maxDate && date.getTime() > maxDate.getTime());

  const [internalCalendarOpen, setInternalCalendarOpen] = useState(false);
  const calendarOpen = props.open ?? internalCalendarOpen;
  const setCalendarOpen = props.setOpen ?? setInternalCalendarOpen;

  const periodStart = useFirstPeriod({
    onSelectDate: props.onSelectDateFrom,
    value: props.value ?? props.period?.start,
    calendarOpen,
    minDate,
    maxDate,
    dateIsInRange,
  });

  const periodEnd = useSecondPeriod(
    {
      onSelectDate: props.onSelectDateTo,
      value: props.period?.end,
      calendarOpen,
      year: periodStart?.month === 11 ? periodStart.year + 1 : periodStart?.year,
      month: periodStart?.month === 11 ? 0 : periodStart.month + 1,
      minDate,
      maxDate,
      dateIsInRange,
    },
    !props.isPeriodPicker
  );

  const prev = () => periodStart?.prev();
  const next = () => periodStart.next();

  const monthLabels = props.monthLabels ?? defaultMonthLabels;
  const dayLabels = props.dayLabels ?? defaultDayLabels;
  const closeLabel = props.closeLabel ?? 'Lukk';

  if (periodStart) {
    const value = {
      datePickerRef,
      setCalendarOpen,
      calendarOpen,
      periodStart,
      periodEnd,
      next,
      prev,
      monthLabels,
      dayLabels,
      maxDate,
      minDate,
      dateIsInRange,
      isMobile,
      closeLabel,
    };
    return <DatePickerContext.Provider value={value}>{props.children}</DatePickerContext.Provider>;
  }
  console.warn('PeriodStart is undefined in PeriodPicker!');
  return null;
};
