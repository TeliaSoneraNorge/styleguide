import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownMenu, DropdownItem, DropdownSearchToggle } from '../Dropdown';
import { useDatePicker } from './context';

export type Props = {
  size?: 'compact' | 'default';
  setTime: (time: string) => void;
  inputValue?: string;
  rightContent?: React.ReactNode;
};
export const DatePickerTimeInput = (props: Props) => {
  const [open, setOpen] = useState(false);
  const { setCalendarOpen } = useDatePicker();

  useEffect(() => {
    if (open) setCalendarOpen(false);
  }, [open]);

  const options = () => {
    const o = [];
    for (let i = 0; i < 24; i++) {
      const time = i.toString().padStart(2, '0') + ':00';
      o.push(
        <DropdownItem centered onClick={() => props.setTime(time)}>
          {time}
        </DropdownItem>
      );
    }
    return o;
  };

  const setTime = (value: string, previousValue: string) => {
    const changeWasRemove = value.length < previousValue.length;
    const changeWasClearReplace = previousValue.length === 5 && value.length === 1;

    const regExp = /[a-zA-Z]/g;
    if (regExp.test(value)) {
      return;
    }

    const parts = value.split(':');

    const h = parts?.[0];
    const validHour = !h || h.length < 2 || ('0' <= h && h < '24' && h.length < 3);

    const m = parts?.[1];
    const validMin = !m || m.length < 2 || ('0' <= m && m < '60' && m.length < 3);

    if (!validHour || !validMin) {
      return;
    }

    const hString = h ? (parseInt(h) > 2 && parseInt(h) < 10 ? h.padStart(2, '0') : h) : '';
    const mString = m ? (parseInt(m) > 5 && parseInt(m) < 10 ? m.padStart(2, '0') : m) : '';

    if ((changeWasRemove && !changeWasClearReplace) || hString.length == 1 || mString.length == 1) {
      return props.setTime(value);
    } else {
      return props.setTime(`${hString ? hString + ':' : ''}${mString ? mString : ''}`);
    }
  };

  return (
    <div className="telia-date-picker--input-wrapper">
      <Dropdown open={open} setOpen={setOpen}>
        <DropdownSearchToggle
          className="telia-date-picker--input telia-date-picker--input__time"
          type="text"
          label={!props.inputValue && !open ? '--:--' : undefined}
          value={props.inputValue ?? '00:00'}
          size={props.size}
          onInputChange={(value) => setTime(value, props.inputValue ?? '')}
          rightContent={props.rightContent}
          openImmediately
        />
        <DropdownMenu>{options()}</DropdownMenu>
      </Dropdown>
    </div>
  );
};
