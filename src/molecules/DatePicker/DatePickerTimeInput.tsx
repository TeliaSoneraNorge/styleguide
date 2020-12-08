import React from 'react';
import { TextField } from '../../business/TextField';
import { useDatePicker } from './context';

export type Props = {
  size?: 'compact' | 'default';

  setTime?: (time: string) => void;
  inputValue?: string;
  rightContent?: React.ReactNode;
  max?: string;
  min?: string;
};
export const DatePickerTimeInput = (props: Props) => {
  const { setCalendarOpen } = useDatePicker();

  return (
    <TextField
      className="telia-date-picker--input telia-date-picker--input__time"
      type="time"
      value={props.inputValue}
      size={props.size}
      onChange={(e) => props.setTime?.(e.target.value)}
      rightContent={props.rightContent}
      onFocus={() => {
        setCalendarOpen(false);
      }}
      max={props.max}
      min={props.min}
    />
  );
};
