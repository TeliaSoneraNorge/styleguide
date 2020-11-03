import React from 'react';
import { DatePicker } from './DatePicker';

type Props = {
  day: number;
  onClick: () => void;
};
export const DatePickerDay = (props: Props) => {
  return <button className="telia-date-picker--day">{props.day}</button>;
};
