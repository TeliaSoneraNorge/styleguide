import React from 'react';
import { DatePickerContextProvider, DatePickerContext } from './DatePicker';
import { DatePickerInput } from './DatePickerInput';
import { DatePickerMenu } from './DatePickerMenu';
import { Avatar, Icon } from '../../index';
import { TextField } from '../../business';
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
            <div className="telia-date-picker--inputs">
              <DatePickerInput
                {...props}
                {...contextValue.periodStart}
                label={props.label ?? 'Velg periode'}
                leftContent={<Icon icon="arrow-right" style={{ height: '1.25rem', width: '1.25rem' }} />}
              />
              <DatePickerInput
                {...props}
                {...contextValue.periodEnd}
                label={undefined}
                leftContent={
                  <Avatar
                    icon="calendar"
                    onClick={() => contextValue.setCalendarOpen(!contextValue.calendarOpen)}
                    size="compact"
                    color="transparent"
                  />
                }
              />
            </div>
            <DatePickerMenu />
          </div>
        )}
      </DatePickerContext.Consumer>
    </DatePickerContextProvider>
  );
};
