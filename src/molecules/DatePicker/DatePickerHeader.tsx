import React from 'react';
import { useDatePicker } from './contex';
import { Button } from '../../business/Button';

export const DatePickerHeader = () => {
  const { prev, next, periodStart, periodEnd, monthLabels } = useDatePicker();

  return (
    <div className="telia-date-picker--header">
      <Button onClick={prev} icon="arrow-left" kind="secondary-text" size="compact" />
      {periodEnd ? (
        <div className="telia-date-picker--header--labels">
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

      <Button onClick={next} icon="arrow-right" kind="secondary-text" size="compact" />
    </div>
  );
};
