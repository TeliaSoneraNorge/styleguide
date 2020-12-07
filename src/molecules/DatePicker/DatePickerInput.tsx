import React, { useState } from 'react';
import { TextField } from '../../business/TextField';
import { useDatePicker } from './context';

export type Props = {
  size?: 'compact' | 'default';

  label?: string;

  setSelectedDate: (date: Date) => void;
  inputValue?: string;
  setInputValue: (input?: string) => void;
  leftContent?: React.ReactNode;
};
export const DatePickerInput = (props: Props) => {
  const [hasFocus, setHasFocus] = useState(false);
  const { setCalendarOpen } = useDatePicker();

  return (
    <TextField
      className="telia-date-picker--input"
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
      rightContent={props.leftContent}
      label={props.label}
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
