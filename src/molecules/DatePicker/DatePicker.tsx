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

  /**
   * @default "Velg dato"
   */
  label?: string;

  /**
   * ordered array of label for months, from january-december
   * @default "Norwegain full name. ['Januar','Februar','Mars','April','Mai','Juni','Juli','August','September','Oktober','November','Desember'];"
   */
  monthLabels?: Array<string>;

  /**
   * ordered array of label for months, from january-december
   * @default "Norwgian short name. ['Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sø']"
   */
  dayLabels?: Array<string>;
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
