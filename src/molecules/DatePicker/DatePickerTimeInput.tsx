import React from 'react';
import { Dropdown, DropdownMenu, DropdownItem, DropdownSearchToggle } from '../Dropdown';

export type Props = {
  size?: 'compact' | 'default';
  setTime: (time: string) => void;
  inputValue?: string;
  rightContent?: React.ReactNode;
  max?: string;
  min?: string;
};
export const DatePickerTimeInput = (props: Props) => {
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
      <Dropdown>
        <DropdownSearchToggle
          openImmediately={true}
          className="telia-date-picker--input telia-date-picker--input__time"
          type="time"
          value={props.inputValue ?? '00:00'}
          size={props.size}
          onInputChange={(value) => {
            props.setTime?.(value);
          }}
          rightContent={props.rightContent}
          max={props.max}
          min={props.min}
          list="time-list"
        />
        <DropdownMenu>{options()}</DropdownMenu>
      </Dropdown>
    </div>
  );
};
