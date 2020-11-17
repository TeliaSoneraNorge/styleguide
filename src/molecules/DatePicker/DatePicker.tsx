import React, { useEffect, useState, useRef, RefObject } from 'react';

import { DatePickerMenu } from './DatePickerMenu';
import { TextField } from '../../business/TextField';
import format from './format';
import { Button } from '../../business/Button';
import { Avatar } from '../Avatar';
type Props = {
  /**
   * After a new date has been set
   */
  onSelectDate?: (date?: string) => void;

  value?: string;

  size?: 'compact' | 'default';
};

export const DatePicker = (props: Props) => {
  const [hasFocus, setHasFocus] = useState(false);
  return (
    <DatePickerContextProvider {...props}>
      <DatePickerContext.Consumer>
        {(contextValue) => (
          <div className="telia-date-picker" ref={contextValue.datePickerRef}>
            <TextField
              placeholder="dd.mm.åååå"
              type={hasFocus || contextValue.inputValue ? 'date' : 'text'}
              value={contextValue.inputValue ?? ''}
              size={props.size}
              onChange={(e) => {
                contextValue.setInputValue(e.target.value);
                if (e.target.valueAsDate?.getFullYear().toString().length === 4) {
                  contextValue.setSelectedDate(new Date(e.target.value));
                }
              }}
              rightContent={
                <Avatar
                  icon="calendar"
                  onClick={() => contextValue.setCalendarOpen(!contextValue.calendarOpen)}
                  size="compact"
                  color="transparent"
                  // ensure that we tab into menu first
                  tabIndex={1}
                />
              }
              label="Velg dato"
              onFocus={() => {
                setHasFocus(true);
                contextValue.setCalendarOpen(true);
              }}
              onBlur={() => {
                setHasFocus(false);
              }}
            />
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
  inputValue?: string;
  setInputValue: (input?: string) => void;
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
  inputValue: '',
  setInputValue: () => {},
});

const DatePickerContextProvider: React.FC<Props> = (props) => {
  const datePickerRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState(props.value);
  const [selectedDate, setSelectedDate] = useState(inputValue ? new Date(inputValue) : undefined);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [year, setYear] = useState(selectedDate ? selectedDate.getFullYear() : new Date().getFullYear());
  const [month, setMonth] = useState(selectedDate ? selectedDate.getMonth() : new Date().getMonth());

  const resetState = () => {
    setYear(selectedDate ? selectedDate.getFullYear() : new Date().getFullYear());
    setMonth(selectedDate ? selectedDate.getMonth() : new Date().getMonth());
  };

  useEffect(() => {
    if (!calendarOpen) {
      props.onSelectDate?.(selectedDate ? format.dateToString(selectedDate) : undefined);
      resetState();
    }
  }, [calendarOpen]);

  useEffect(() => {
    if (selectedDate) {
      setYear(selectedDate.getFullYear());
      setMonth(selectedDate.getMonth());
      setInputValue(format.dateToString(selectedDate));
    }
  }, [selectedDate]);

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
    inputValue,
    setInputValue,
  };
  return <DatePickerContext.Provider value={value}>{props.children}</DatePickerContext.Provider>;
};

export const useDatePicker = () => React.useContext(DatePickerContext);
