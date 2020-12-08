import React from 'react';
import { DatePickerMenu } from './DatePickerMenu';
import { DatePickerContextProvider, DatePickerContext } from './context';

import { DatePickerInput } from './DatePickerInput';
import { DatePickerProps } from './types';
import { Calendar } from './Accessories';

export const DatePicker = (props: DatePickerProps) => {
  return (
    <DatePickerContextProvider {...props} onSelectDateFrom={props.onSelectDate}>
      <DatePickerContext.Consumer>
        {(contextValue) => (
          <div className="telia-date-picker" ref={contextValue.datePickerRef}>
            <DatePickerInput
              {...contextValue.periodStart}
              min={props.minDate}
              max={props.maxDate}
              rightContent={
                !props.time && <Calendar onClick={() => contextValue.setCalendarOpen(!contextValue.calendarOpen)} />
              }
              label={props.label ?? 'Velg dato'}
            />

            <DatePickerMenu />
          </div>
        )}
      </DatePickerContext.Consumer>
    </DatePickerContextProvider>
  );
};
