import React, { useEffect, useState, useRef, RefObject } from 'react';
import format from './format';
const defaultMonthLabels = [
  'Januar',
  'Februar',
  'Mars',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Desember',
];
const defaultDayLabels = ['Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sø'];

type ContextValue = {
  datePickerRef: RefObject<HTMLDivElement> | null;
  setCalendarOpen: (open: boolean) => void;
  calendarOpen: boolean;
  periodStart: Period;
  periodEnd?: Period;
  next: () => void;
  prev: () => void;
  monthLabels: string[];
  dayLabels: string[];
  maxDate?: Date;
  minDate?: Date;
  dateIsInRange: (date: Date) => boolean;
};

type Period = {
  year: number;
  setYear: (year: number) => void;
  month: number;
  setMonth: (month: number) => void;
  selectedDate?: Date;
  setSelectedDate: (date?: Date) => void;
  inputValue?: string;
  setInputValue: (input?: string) => void;
  numberOfDays: number;
  dayOfStart: number;
};

export const DatePickerContext = React.createContext<ContextValue>({
  calendarOpen: false,
  setCalendarOpen: () => {},
  datePickerRef: null,
  periodStart: {
    month: 0,
    setMonth: () => {},
    year: 0,
    setYear: () => {},
    selectedDate: undefined,
    setSelectedDate: () => {},
    inputValue: '',
    setInputValue: () => {},
    numberOfDays: 0,
    dayOfStart: 0,
  },
  next: () => {},
  prev: () => {},
  monthLabels: defaultMonthLabels,
  dayLabels: defaultDayLabels,
  dateIsInRange: () => true,
});

const useSingleDatePicker = (
  params: {
    onSelectDate?: (date?: string) => void;
    dateIsInRange: (date: Date) => boolean;
    value?: string;
    calendarOpen: boolean;
    year?: number;
    month?: number;
    maxDate?: Date;
    minDate?: Date;
  },

  skip?: boolean
) => {
  const [inputValue, setInputValue] = useState(params.value);
  const [selectedDate, setSelectedDate] = useState(inputValue ? new Date(inputValue) : undefined);
  const [year, setYear] = useState(params.year ?? selectedDate?.getFullYear() ?? new Date().getFullYear());
  const [month, setMonth] = useState(params.month ?? selectedDate?.getMonth() ?? new Date().getMonth());
  const numberOfDays = new Date(year, month + 1, 0).getDate();
  const dayOfStart = new Date(year, month, 1).getDay();

  const resetState = () => {
    setYear(params.year ?? selectedDate?.getFullYear() ?? new Date().getFullYear());
    setMonth(params.month ?? selectedDate?.getMonth() ?? new Date().getMonth());
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
      }
    } else {
      setInputValue('');
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
    setYear,
    month,
    setMonth,
    selectedDate,
    setSelectedDate,
    inputValue,
    setInputValue,
    numberOfDays,
    dayOfStart,
    prev,
    next,
  };

  return skip ? undefined : value;
};

type ContextProps = {
  onSelectDate?: (date?: string) => void;
  value?: string;
  period?: {
    start: string;
    end: string;
  };
  isPeriodPicker?: boolean;
  monthLabels?: string[];
  dayLabels?: string[];

  maxDate?: string;
  minDate?: string;
};
export const DatePickerContextProvider: React.FC<ContextProps> = (props) => {
  const datePickerRef = useRef<HTMLDivElement>(null);
  const maxDate = props.maxDate ? new Date(props.maxDate) : undefined;
  const minDate = props.minDate ? new Date(props.minDate) : undefined;

  const dateIsInRange = (date: Date) =>
    !(minDate && date.getTime() < minDate.getTime()) && !(maxDate && date.getTime() > maxDate.getTime());

  const [calendarOpen, setCalendarOpen] = useState(false);

  const periodStart = useSingleDatePicker({
    onSelectDate: props.onSelectDate,
    value: props.value ?? props.period?.start,
    calendarOpen,
    minDate,
    maxDate,
    dateIsInRange,
  });

  const periodEnd = useSingleDatePicker(
    {
      onSelectDate: props.onSelectDate,
      value: props.period?.end,
      calendarOpen,
      year: periodStart?.month === 11 ? periodStart.year + 1 : periodStart?.year,
      month: periodStart ? (periodStart.month === 11 ? 0 : periodStart.month + 1) : undefined,
      minDate,
      maxDate,
      dateIsInRange,
    },
    !props.isPeriodPicker
  );

  const prev = () => {
    periodStart?.prev();
    periodEnd?.prev();
  };

  const next = () => {
    periodStart?.next();
    periodEnd?.next();
  };

  const monthLabels = props.monthLabels ?? defaultMonthLabels;
  const dayLabels = props.dayLabels ?? defaultDayLabels;

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
    };
    return <DatePickerContext.Provider value={value}>{props.children}</DatePickerContext.Provider>;
  }
  console.warn('PeriodStart is undefined in PeriodPicker!');
  return null;
};

export const useDatePicker = () => React.useContext(DatePickerContext);
