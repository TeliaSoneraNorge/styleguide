import React from 'react';
import { useDatePicker } from './context';
import { Button } from '../../business/Button';

export const DatePickerHeader = () => {
  const { prev, next, periodStart, periodEnd, monthLabels, maxDate, minDate } = useDatePicker();

  const disableNext =
    maxDate &&
    (periodEnd
      ? periodEnd.year == maxDate?.getFullYear() && periodEnd.month == maxDate.getMonth()
      : periodStart.year == maxDate?.getFullYear() && periodStart.month == maxDate.getMonth());

  const disablePrev = minDate && periodStart.year == minDate?.getFullYear() && periodStart.month == minDate.getMonth();

  return (
    <div className="telia-date-picker__header">
      <Button onClick={prev} disabled={disablePrev} icon="arrow-left" kind="secondary-text" size="compact" />
      {periodEnd ? (
        <div className="telia-date-picker__header__labels">
          <div>
            {monthLabels[periodStart.month]} {periodStart.year}
          </div>
          <div>
            {monthLabels[periodEnd.month]} {periodEnd.year}
          </div>
        </div>
      ) : (
        <div>
          {monthLabels[periodStart.month]} {periodStart.year}
        </div>
      )}

      <Button onClick={next} disabled={disableNext} icon="arrow-right" kind="secondary-text" size="compact" />
    </div>
  );
};
