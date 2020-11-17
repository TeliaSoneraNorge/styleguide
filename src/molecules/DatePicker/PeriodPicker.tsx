import React from 'react';
import { DatePickerContextProvider, DatePickerContext } from './DatePicker';
import { DatePickerInput } from './DatePickerInput';
import { DatePickerMenu } from './DatePickerMenu';

type Props = {
  /**
   * After a new date has been set
   */
  onSelectDate?: (date?: string) => void;

  period?: {
    start: string;
    end: string;
  };

  size?: 'compact' | 'default';

  label?: string;
};

export const PeriodPicker = (props: Props) => {
  return (
    <DatePickerContextProvider {...props} isPeriodPicker={true} period={props.period}>
      <DatePickerContext.Consumer>
        {(contextValue) => (
          <div className="telia-date-picker telia-date-picker__period" ref={contextValue.datePickerRef}>
            <DatePickerInput {...props} {...contextValue.periodStart} />
            <DatePickerInput {...props} {...contextValue.periodEnd} />
            <DatePickerMenu />
          </div>
        )}
      </DatePickerContext.Consumer>
    </DatePickerContextProvider>
  );
};
