import React from 'react';
import { useDatePicker } from './context';
import { useFocusTrap } from '../../utils/useFocusTrap';
import { useEscapeListener } from '../Modal/useEscapeListener';
import { DatePickerDay, DatePickerDayPlaceholder } from './DatePickerDay';
import { DatePickerHeader } from './DatePickerHeader';
import { useClickOutsideListener } from './useClickOutsideListener';
import cn from 'classnames';
import { Button } from '../../business';

type Month = {
  dayOfStart: number;
  month: number;
  year: number;
  numberOfDays: number;
};

export const DatePickerMenu: React.FC = ({ children }) => {
  const {
    setCalendarOpen,
    calendarOpen,
    datePickerRef,
    periodEnd,
    periodStart,
    dayLabels,
    isMobile,
    monthLabels,
    closeLabel,
  } = useDatePicker();
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

  const renderMonth = (params: { month: Month; renderDays: boolean; renderMonth: boolean }) => {
    return (
      <>
        <div className="telia-date-picker__month">
          {params.renderMonth && (
            <div className="telia-date-picker__month-label">
              {monthLabels[params.month.month]} {params.month.year}
            </div>
          )}
          {params.renderDays && renderDays()}
          {renderEmptySlots(params.month.dayOfStart)}
          {renderDates(params.month)}
        </div>
      </>
    );
  };

  return (
    <div ref={container} className={cn('telia-date-picker__menu', { 'telia-date-picker__menu--compact': isMobile })}>
      <DatePickerHeader />
      {periodEnd ? (
        <div className={cn('telia-date-picker__months', { 'telia-date-picker__months--stack': isMobile })}>
          {renderMonth({ month: periodStart, renderDays: true, renderMonth: false })}
          {renderMonth({ month: periodEnd, renderDays: !isMobile, renderMonth: isMobile })}
        </div>
      ) : (
        renderMonth({ month: periodStart, renderDays: true, renderMonth: false })
      )}
      <div className="telia-date-picker__menu__options">{children}</div>
      {isMobile && (
        <div className="telia-date-picker__menu__close">
          <Button onClick={() => setCalendarOpen(false)} label={closeLabel} size="compact" kind="secondary" />
        </div>
      )}
    </div>
  );
};
