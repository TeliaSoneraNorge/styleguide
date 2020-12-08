import React, { useState } from 'react';
import { TextField } from '../../business/TextField';
import { useDatePicker } from './context';

export type Props = {
  size?: 'compact' | 'default';
  label?: string;
  setSelectedDate: (date: Date) => void;
  inputValue?: string;
  setInputValue: (input?: string) => void;
  rightContent?: React.ReactNode;
  max?: string;
  min?: string;
};
export const DatePickerInput = (props: Props) => {
  const { setCalendarOpen } = useDatePicker();

  /**
   * We handle the dates as yyyy-mm-dd, but want to display them as dd.mm.yyyy
   */
  const input =
    props.inputValue?.length === 10 ? props.inputValue.split('-').reverse().join('.') : props.inputValue ?? '';
  return (
    <TextField
      className="telia-date-picker--input"
      placeholder="dd.mm.åååå"
      type="text"
      value={input}
      size={props.size}
      maxlength={10}
      onChange={(e) => {
        /**
         * TODO: add constraints on month, day and year
         */
        const changeWasRemove = e.target.value.length < input.length;
        if (!changeWasRemove && [2, 5].includes(e.target.value.length)) {
          props.setInputValue(e.target.value + '.');
        } else {
          props.setInputValue(e.target.value);
        }
      }}
      rightContent={props.rightContent}
      label={props.label}
      onFocus={() => setCalendarOpen(true)}
    />
  );
};
