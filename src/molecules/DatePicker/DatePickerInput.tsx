import React, { useState } from 'react';
import { TextField } from '../../business/TextField';
import { Avatar } from '../Avatar';
import { useDatePicker } from './DatePicker';

export type Props = {
  size?: 'compact' | 'default';

  label?: string;

  setSelectedDate: (date: Date) => void;
  inputValue?: string;
  setInputValue: (input?: string) => void;
};
export const DatePickerInput = (props: Props) => {
  const [hasFocus, setHasFocus] = useState(false);
  const { setCalendarOpen, calendarOpen } = useDatePicker();

  return (
    <TextField
      placeholder="dd.mm.åååå"
      type={hasFocus || props.inputValue ? 'date' : 'text'}
      value={props.inputValue ?? ''}
      size={props.size}
      onChange={(e) => {
        props.setInputValue(e.target.value);
        if (e.target.valueAsDate?.getFullYear().toString().length === 4) {
          props.setSelectedDate(new Date(e.target.value));
        }
      }}
      rightContent={
        <Avatar icon="calendar" onClick={() => setCalendarOpen(!calendarOpen)} size="compact" color="transparent" />
      }
      label={props.label ?? 'Velg dato'}
      onFocus={() => {
        setHasFocus(true);
        setCalendarOpen(true);
      }}
      onBlur={() => {
        setHasFocus(false);
      }}
    />
  );
};
