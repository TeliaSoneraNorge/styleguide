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
  const [calendarOpen, setCalendarOpen] = useState(false);

  return (
    <div className="telia-date-picker">
      <TextField placeholder="dd.mm.åååå" label="Velg dato" onFocus={() => setCalendarOpen(true)} />
      <DatePickerMenu open={calendarOpen} setOpen={setCalendarOpen} />
    </div>
  );
};
