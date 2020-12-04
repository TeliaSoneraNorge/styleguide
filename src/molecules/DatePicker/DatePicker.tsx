import React from 'react';
import { DatePickerMenu } from './DatePickerMenu';
import { DatePickerContextProvider, DatePickerContext } from './contex';
import { Avatar } from '../Avatar';
import { DatePickerInput } from './DatePickerInput';

export type DatePickerProps = {
  /**
   * After a new date has been set
   */
  onSelectDate?: (date?: string) => void;

  value?: string;

  size?: 'compact' | 'default';

  label?: string;
};

export const DatePicker = (props: DatePickerProps) => {
  return (
    <DatePickerContextProvider {...props}>
      <DatePickerContext.Consumer>
        {(contextValue) => (
          <div className="telia-date-picker" ref={contextValue.datePickerRef}>
            <DatePickerInput
              {...contextValue.periodStart}
              leftContent={
                <Avatar
                  icon="calendar"
                  onClick={() => contextValue.setCalendarOpen(!contextValue.calendarOpen)}
                  size="compact"
                  color="transparent"
                />
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
