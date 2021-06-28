import React from 'react';
import { DatePickerContextProvider, DatePickerContext } from './context';
import { DatePickerInput } from './DatePickerInput';
import { DatePickerMenu } from './DatePickerMenu';
import { Arrow, Calendar } from './Accessories';
import { PeriodPickerProps } from './types';
import { DatePickerTimeInput } from './DatePickerTimeInput';

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
        {({ setCalendarOpen, calendarOpen, datePickerRef, periodStart, periodEnd }) => (
          <div className="telia-date-picker telia-date-picker__period" ref={datePickerRef}>
            <div className="telia-date-picker__inputs">
              <DatePickerInput
                {...periodStart}
                size={props.size}
                label={props.label ?? 'Velg periode'}
                rightContent={!props.time && <Arrow />}
                placeholder={props.inputPlaceholder}
                min={props.minDate}
                max={props.maxDate}
              />
              {props.time && (
                <DatePickerTimeInput
                  size={props.size}
                  inputValue={props.timeFrom}
                  setTime={props.onSelectedTimeFrom}
                  rightContent={<Arrow />}
                />
              )}
              {periodEnd && (
                <>
                  <DatePickerInput
                    {...periodEnd}
                    size={props.size}
                    label={undefined}
                    rightContent={!props.time && <Calendar onClick={() => setCalendarOpen(!calendarOpen)} />}
                    placeholder={props.inputPlaceholder}
                    min={props.minDate}
                    max={props.maxDate}
                  />
                  {props.time && (
                    <DatePickerTimeInput
                      size={props.size}
                      inputValue={props.timeTo}
                      setTime={props.onSelectedTimeTo}
                      rightContent={<Calendar onClick={() => setCalendarOpen(!calendarOpen)} />}
                    />
                  )}
                </>
              )}
            </div>
            <DatePickerMenu>{props.options}</DatePickerMenu>
          </div>
        )}
      </DatePickerContext.Consumer>
    </DatePickerContextProvider>
  );
};
