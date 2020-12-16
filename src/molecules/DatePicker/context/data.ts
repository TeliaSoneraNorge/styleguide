export const defaultMonthLabels = [
  'Januar',
  'Februar',
  'Mars',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Desember',
];
export const defaultDayLabels = ['Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sø'];

export const InitialContextValue = {
  calendarOpen: false,
  setCalendarOpen: () => {},
  datePickerRef: null,
  periodStart: {
    month: 0,
    year: 0,
    selectedDate: undefined,
    setSelectedDate: () => {},
    inputValue: '',
    setInputValue: () => {},
    numberOfDays: 0,
    dayOfStart: 0,
  },
  next: () => {},
  prev: () => {},
  monthLabels: defaultMonthLabels,
  dayLabels: defaultDayLabels,
  dateIsInRange: () => true,
};
