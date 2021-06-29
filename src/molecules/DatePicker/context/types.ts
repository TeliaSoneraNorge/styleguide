import { RefObject } from 'react';

export type PeriodParameters = {
  onSelectDate?: (date?: string) => void;
  dateIsInRange: (date: Date) => boolean;
  value?: string;
  calendarOpen: boolean;
  maxDate?: Date;
  minDate?: Date;
};

export type Period = {
  year: number;
  month: number;
  selectedDate?: Date;
  setSelectedDate: (date?: Date) => void;
  inputValue?: string;
  setInputValue: (input?: string) => void;
  numberOfDays: number;
  dayOfStart: number;
};

export type ContextValue = {
  datePickerRef: RefObject<HTMLDivElement> | null;
  setCalendarOpen: (open: boolean) => void;
  calendarOpen: boolean;
  periodStart: Period;
  periodEnd?: Period;
  next: () => void;
  prev: () => void;
  monthLabels: string[];
  dayLabels: string[];
  closeLabel: string;
  maxDate?: Date;
  minDate?: Date;
  dateIsInRange: (date: Date) => boolean;
  isMobile: boolean;
};

export type ContextProps = {
  onSelectDateFrom?: (date?: string) => void;
  onSelectDateTo?: (date?: string) => void;
  value?: string;
  period?: {
    start?: string;
    end?: string;
  };
  isPeriodPicker?: boolean;
  monthLabels?: string[];
  dayLabels?: string[];
  closeLabel?: string;

  maxDate?: string;
  minDate?: string;

  /**
   * to control open state of the date picker menu
   */
  open?: boolean;
  setOpen?: (open: boolean) => void;
};
