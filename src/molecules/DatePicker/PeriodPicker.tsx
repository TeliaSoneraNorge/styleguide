import React from 'react';
import { DatePickerContextProvider, DatePickerContext } from './context';
import { DatePickerInput } from './DatePickerInput';
import { DatePickerMenu } from './DatePickerMenu';
import { Avatar, Icon } from '../../index';
import { PeriodPickerProps } from './types';

export const PeriodPicker = (props: PeriodPickerProps) => {
  return (
    <DatePickerContextProvider
      {...props}
      onSelectDateFrom={props.onSelectDateFrom}
      onSelectDateTo={props.onSelectDateTo}
      isPeriodPicker={true}
      period={props.period}
    >
      <DatePickerContext.Consumer>
        {(contextValue) => (
          <div className="telia-date-picker telia-date-picker__period" ref={contextValue.datePickerRef}>
            <div className="telia-date-picker--inputs">
              <DatePickerInput
                {...contextValue.periodStart}
                size={props.size}
                label={props.label ?? 'Velg periode'}
                leftContent={<Icon icon="arrow-right" style={{ height: '1.25rem', width: '1.25rem' }} />}
                min={props.minDate}
                max={props.maxDate}
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
                  min={props.minDate}
                  max={props.maxDate}
                />
              )}
            </div>
            <DatePickerMenu>{props.options}</DatePickerMenu>
          </div>
        )}
      </DatePickerContext.Consumer>
    </DatePickerContextProvider>
  );
};
