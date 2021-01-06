import React from 'react';
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

  const setDateInputValue = (value: string, previousValue: string) => {
    const changeWasRemove = value.length < previousValue.length;

    const regExp = /[a-zA-Z]/g;
    if (regExp.test(value)) {
      return;
    }

    const parts = value.split('.');

    const day = parts?.[0];
    const validDay = !day || day.length < 2 || ('0' <= day && day < '32');

    const month = parts?.[1];
    const validMonth = !month || month.length < 2 || ('0' <= month && month < '13');

    const year = parts?.[2] ?? '';
    if (!validDay || !validMonth) {
      return;
    }

    const dayString = day ? (parseInt(day) > 3 && parseInt(day) < 10 ? day.padStart(2, '0') : day) : '';
    const monthString = month ? (parseInt(month) > 1 && parseInt(month) < 10 ? month.padStart(2, '0') : month) : '';

    if (changeWasRemove) {
      return props.setInputValue(value);
    } else if (dayString.length == 1) {
      return props.setInputValue(value);
    } else if (monthString.length == 1) {
      return props.setInputValue(value);
    } else {
      return props.setInputValue(`${dayString ? dayString + '.' : ''}${monthString ? monthString + '.' : ''}${year}`);
    }
  };
  return (
    <TextField
      className="telia-date-picker--input"
      placeholder="dd.mm.åååå"
      type="text"
      value={input}
      size={props.size}
      maxlength={10}
      onChange={(e) => setDateInputValue(e.target.value, input)}
      rightContent={props.rightContent}
      label={props.label}
      onFocus={() => setCalendarOpen(true)}
    />
  );
};
