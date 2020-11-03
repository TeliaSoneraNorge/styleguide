import React, { useState } from 'react';
import { TextField } from '../../business/TextField';
import { useFocusTrap } from '../Modal/useFocusTrap';
import { useEscapeListener } from '../Modal/useEscapeListener';
import { DatePickerDay } from './DatePickerDay';
type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const DatePickerMenu = (props: Props) => {
  const { container } = useFocusTrap();
  useEscapeListener({ onEscape: () => props.setOpen(false) });

  const days = new Date(2020, 2, 0).getDate();

  if (!props.open) return null;

  const renderDays = () => {
    const dayList = [];
    for (let i = 1; i <= days; i++) {
      dayList.push(<DatePickerDay key={`day-${i}`} day={i} onClick={() => console.log(i)} />);
    }
    return dayList;
  };

  return (
    <div ref={container} className="telia-date-picker--menu">
      <div ref={container} className="telia-date-picker--menu-header">
        Header
      </div>

      <div className="telia-date-picker--month">{renderDays()}</div>
    </div>
  );
};
