import React from 'react';
import { DatePickerContextProvider, DatePickerContext } from './contex';
import { DatePickerInput } from './DatePickerInput';
import { DatePickerMenu } from './DatePickerMenu';
import { Avatar, Icon } from '../../index';

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

  /**
   * @default "Velg periode"
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

export const PeriodPicker = (props: Props) => {
  return (
    <DatePickerContextProvider {...props} isPeriodPicker={true} period={props.period}>
      <DatePickerContext.Consumer>
        {(contextValue) => (
          <div className="telia-date-picker telia-date-picker__period" ref={contextValue.datePickerRef}>
            <div className="telia-date-picker--inputs">
              <DatePickerInput
                {...contextValue.periodStart}
                size={props.size}
                label={props.label ?? 'Velg periode'}
                leftContent={<Icon icon="arrow-right" style={{ height: '1.25rem', width: '1.25rem' }} />}
              />
              {contextValue.periodEnd && (
                <DatePickerInput
                  {...contextValue.periodEnd}
                  size={props.size}
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
              )}
            </div>
            <DatePickerMenu />
          </div>
        )}
      </DatePickerContext.Consumer>
    </DatePickerContextProvider>
  );
};
