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
  return (
    <div className="telia-date-picker--input-wrapper">
      <Dropdown open={open} toggle={() => setOpen(!open)}>
        <DropdownSearchToggle
          className="telia-date-picker--input telia-date-picker--input__time"
          type="time"
          value={props.inputValue ?? '00:00'}
          size={props.size}
          onInputChange={(value) => {
            props.setTime?.(value);
          }}
          onFocus={() => setOpen(true)}
          rightContent={props.rightContent}
        />
        <DropdownMenu>{options()}</DropdownMenu>
      </Dropdown>
    </div>
  );
};
