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

type ContextValue = {
  datePickerRef: RefObject<HTMLDivElement> | null;
  setCalendarOpen: (open: boolean) => void;
  calendarOpen: boolean;
  periodStart: Period;
  periodEnd?: Period;
  next: () => void;
  prev: () => void;
  monthLabels: string[];
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
});

const useSingleDatePicker = (
  params: {
    onSelectDate?: (date?: string) => void;
    value?: string;
    calendarOpen: boolean;
    year?: number;
    month?: number;
  },
  skip?: boolean
) => {
  const [inputValue, setInputValue] = useState(params.value);
  const [selectedDate, setSelectedDate] = useState(inputValue ? new Date(inputValue) : undefined);
  console.log(selectedDate);
  const [year, setYear] = useState(params.year ?? selectedDate?.getFullYear() ?? new Date().getFullYear());
  const [month, setMonth] = useState(params.month ?? selectedDate?.getMonth() ?? new Date().getMonth());
  const numberOfDays = new Date(year, month, 0).getDate();
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
      setInputValue(format.dateToString(selectedDate));
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
};
export const DatePickerContextProvider: React.FC<ContextProps> = (props) => {
  const datePickerRef = useRef<HTMLDivElement>(null);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const periodStart = useSingleDatePicker({
    onSelectDate: props.onSelectDate,
    value: props.value ?? props.period?.start,
    calendarOpen,
  });

  const periodEnd = useSingleDatePicker(
    {
      onSelectDate: props.onSelectDate,
      value: props.period?.end,
      calendarOpen,
      year: periodStart?.month === 11 ? periodStart.year + 1 : periodStart?.year,
      month: periodStart ? (periodStart.month === 11 ? 0 : periodStart.month + 1) : undefined,
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
    };
    return <DatePickerContext.Provider value={value}>{props.children}</DatePickerContext.Provider>;
  }
  console.warn('PeriodStart is undefined in PeriodPicker!');
  return null;
};

export const useDatePicker = () => React.useContext(DatePickerContext);
