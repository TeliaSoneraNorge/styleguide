import React from 'react';
import { useDatePicker } from './DatePicker';
import { useFocusTrap } from '../Modal/useFocusTrap';
import { useEscapeListener } from '../Modal/useEscapeListener';
import { DatePickerDay, DatePickerDayPlaceholder } from './DatePickerDay';
import { DatePickerHeader } from './DatePickerHeader';
import { useClickOutsideListener } from './useClickOutsideListener';
import { Month } from './usePeriod';

export const DatePickerMenu = () => {
  const { setCalendarOpen, calendarOpen, datePickerRef, periodEnd, periodStart } = useDatePicker();
  const { container } = useFocusTrap();
  useEscapeListener({ onEscape: () => setCalendarOpen(false) });
  useClickOutsideListener({ open: calendarOpen, close: () => setCalendarOpen(false), ref: datePickerRef });

  if (!calendarOpen) return null;

  const renderEmptySlots = (dayOfStart: number) => {
    const numerOfSlots = dayOfStart === 0 ? 6 : dayOfStart - 1;
    const slots = [];
    for (let i = 1; i <= numerOfSlots; i++) {
      slots.push(<DatePickerDayPlaceholder key={`nothing-${i}`} />);
    }
    return slots;
  };

  const renderDates = (month: Month) => {
    const dates = [];
    for (let i = 1; i <= month.numberOfDays; i++) {
      dates.push(<DatePickerDay key={`day-${i}`} day={i} date={new Date(`${month.year}-${month.month + 1}-${i}`)} />);
    }
    return dates;
  };

  const renderDays = () => {
    const days = ['Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sn'];

    return (
      <>
        {days.map((d) => (
          <div style={{ fontSize: '14px' }}>{d}</div>
        ))}
      </>
    );
  };

  const renderMonth = (month: Month) => {
    return (
      <div className="telia-date-picker--month">
        {renderDays()}
        {renderEmptySlots(month.dayOfStart)}
        {renderDates(month)}
      </div>
    );
  };

  return (
    <div ref={container} className="telia-date-picker--menu">
      <DatePickerHeader />
      {periodEnd ? (
        <div className="telia-date-picker--months">
          {renderMonth(periodStart)}
          {renderMonth(periodEnd)}
        </div>
      ) : (
        renderMonth(periodStart)
      )}
    </div>
  );
};
