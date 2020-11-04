import React, { useState } from 'react';
import { useDatePicker } from './DatePicker';
import { useFocusTrap } from '../Modal/useFocusTrap';
import { useEscapeListener } from '../Modal/useEscapeListener';
import { DatePickerDay, DatePickerDayPlaceholder } from './DatePickerDay';
import { DatePickerHeader } from './DatePickerHeader';

export const DatePickerMenu = () => {
  const { year, month, setCalendarOpen, calendarOpen } = useDatePicker();
  const { container } = useFocusTrap();
  useEscapeListener({ onEscape: () => setCalendarOpen(false) });

  const numberOfDays = new Date(year, month, 0).getDate();
  const dayOfStart = new Date(year, month, 1).getDay();

  if (!calendarOpen) return null;

  const renderEmptySlots = () => {
    const numerOfSlots = dayOfStart === 0 ? 6 : dayOfStart - 1;
    const slots = [];
    for (let i = 1; i <= numerOfSlots; i++) {
      slots.push(<DatePickerDayPlaceholder key={`nothing-${i}`} />);
    }
    return slots;
  };

  const renderDates = () => {
    const dates = [];
    for (let i = 1; i <= numberOfDays; i++) {
      dates.push(<DatePickerDay key={`day-${i}`} day={i} />);
    }
    return dates;
  };

  const renderDays = () => {
    return (
      <>
        <div style={{ fontSize: '14px' }}> Mon</div>
        <div style={{ fontSize: '14px' }}> Mon</div>
        <div style={{ fontSize: '14px' }}> Mon</div>
        <div style={{ fontSize: '14px' }}> Mon</div>
        <div style={{ fontSize: '14px' }}> Mon</div>
        <div style={{ fontSize: '14px' }}> Mon</div>
        <div style={{ fontSize: '14px' }}> Mon</div>
      </>
    );
  };

  return (
    <div ref={container} className="telia-date-picker--menu">
      <DatePickerHeader />
      <div className="telia-date-picker--month">
        {renderDays()}
        {renderEmptySlots()}
        {renderDates()}
      </div>
    </div>
  );
};
