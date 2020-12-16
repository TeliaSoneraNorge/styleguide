import React from 'react';
import { useDatePicker } from './context';
import { useFocusTrap } from '../Modal/useFocusTrap';
import { useEscapeListener } from '../Modal/useEscapeListener';
import { DatePickerDay, DatePickerDayPlaceholder } from './DatePickerDay';
import { DatePickerHeader } from './DatePickerHeader';
import { useClickOutsideListener } from './useClickOutsideListener';

type Month = {
  dayOfStart: number;
  month: number;
  year: number;
  numberOfDays: number;
};

export const DatePickerMenu: React.FC = ({ children }) => {
  const { setCalendarOpen, calendarOpen, datePickerRef, periodEnd, periodStart, dayLabels } = useDatePicker();
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
      const dayStr = i > 9 ? i : `0${i}`;
      const monthStr = month.month > 8 ? month.month + 1 : `0${month.month + 1}`;

      dates.push(<DatePickerDay key={`day-${i}`} day={i} date={new Date(`${month.year}-${monthStr}-${dayStr}`)} />);
    }
    return dates;
  };

  const renderDays = () => {
    return (
      <>
        {dayLabels.map((d, i) => (
          <div style={{ fontSize: '14px' }} key={`${d}-${i}`}>
            {d}
          </div>
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
      <div className="telia-date-picker--menu--options">{children}</div>
    </div>
  );
};
