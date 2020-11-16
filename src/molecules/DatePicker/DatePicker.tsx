import React, { useEffect, useState, useRef, RefObject } from 'react';
import { DatePickerMenu } from './DatePickerMenu';
import { TextField } from '../../business/TextField';
import { useFocusTrap } from '../Modal/useFocusTrap';
import { useEscapeListener } from '../Modal/useEscapeListener';
type Props = {
  /**
   * After a new date has been set
   */
  onDataChange?: (data: string) => void;

  /**
   * Handle typing in a new date
   */
  onInputChange?: (input: string) => void;

  /**
   * @default dd.mm.yyyy
   */
  format?: string;

  /**
   * Intial date value
   * @default today
   */
  intialValue?: string;
};

export const DatePicker = (props: Props) => {
  return (
    <DatePickerContextProvider {...props}>
      <DatePickerContext.Consumer>
        {(contextValue) => (
          <div className="telia-date-picker" ref={contextValue.datePickerRef}>
            <TextField placeholder="dd.mm.åååå" label="Velg dato" onFocus={() => contextValue.setCalendarOpen(true)} />
            <DatePickerMenu />
          </div>
        )}
      </DatePickerContext.Consumer>
    </DatePickerContextProvider>
  );
};

type ContextValue = {
  year: number;
  setYear: (year: number) => void;
  month: number;
  setMonth: (month: number) => void;
  calendarOpen: boolean;
  setCalendarOpen: (open: boolean) => void;
  selectedDate?: Date;
  setSelectedDate: (date: Date) => void;
  datePickerRef: RefObject<HTMLDivElement> | null;
};

const DatePickerContext = React.createContext<ContextValue>({
  month: 0,
  setMonth: () => {},
  year: 0,
  setYear: () => {},
  calendarOpen: false,
  setCalendarOpen: () => {},
  selectedDate: undefined,
  setSelectedDate: () => {},
  datePickerRef: null,
});

const DatePickerContextProvider: React.FC<{ intialValue?: string }> = (props) => {
  const datePickerRef = useRef<HTMLDivElement>(null);
  const [selectedDate, setSelectedDate] = useState(props.intialValue ? new Date(props.intialValue) : undefined);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [year, setYear] = useState(selectedDate ? selectedDate.getFullYear() : new Date().getFullYear());
  const [month, setMonth] = useState(selectedDate ? selectedDate.getMonth() : new Date().getMonth());

  const resetState = () => {
    const date = props.intialValue ? new Date(props.intialValue) : undefined;
    setSelectedDate(date);
    setYear(date ? date.getFullYear() : new Date().getFullYear());
    setMonth(date ? date.getMonth() : new Date().getMonth());
  };

  useEffect(() => {
    if (!calendarOpen) {
      resetState();
    }
  }, [calendarOpen]);

  const value = {
    year,
    setYear,
    month,
    setMonth,
    datePickerRef,
    calendarOpen,
    setCalendarOpen,
    selectedDate,
    setSelectedDate,
  };
  return <DatePickerContext.Provider value={value}>{props.children}</DatePickerContext.Provider>;
};

export const useDatePicker = () => React.useContext(DatePickerContext);
