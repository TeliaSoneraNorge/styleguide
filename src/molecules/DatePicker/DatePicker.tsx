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
              placeholder={props.inputPlaceholder}
              min={props.minDate}
              max={props.maxDate}
              fullWidth={props.fullWidth}
              rightContent={<Calendar onClick={() => contextValue.setCalendarOpen(!contextValue.calendarOpen)} />}
              label={props.label ?? 'Velg dato'}
              error={props.error}
              helpText={props.helpText}
              required={props.required}
              disabled={props.disabled}
              name={props.name}
              inputRef={props.inputRef}
            />

            <DatePickerMenu />
          </div>
        )}
      </DatePickerContext.Consumer>
    </DatePickerContextProvider>
  );
};
