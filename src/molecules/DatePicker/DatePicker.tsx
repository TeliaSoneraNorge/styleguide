import React, { useState } from 'react';
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
    <DatePickerContextProvider>
      <DatePickerContext.Consumer>
        {contextValue => (
          <div className="telia-date-picker">
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
  day: number;
  setDay: (day: number) => void;
  calendarOpen: boolean;
  setCalendarOpen: (open: boolean) => void;
};

const DatePickerContext = React.createContext<ContextValue>({
  day: 0,
  setDay: () => {},
  month: 0,
  setMonth: () => {},
  year: 0,
  setYear: () => {},
  calendarOpen: false,
  setCalendarOpen: () => {},
});

const DatePickerContextProvider: React.FC<{ intialValue?: string }> = props => {
  const date = props.intialValue ? new Date(props.intialValue) : new Date();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [day, setDay] = useState(date.getDate());
  const value = {
    year,
    setYear,
    month,
    setMonth,
    day,
    setDay,
    calendarOpen,
    setCalendarOpen,
  };
  return <DatePickerContext.Provider value={value}>{props.children}</DatePickerContext.Provider>;
};

export const useDatePicker = () => React.useContext(DatePickerContext);
