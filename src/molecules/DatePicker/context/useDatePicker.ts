import { useContext } from 'react';
import { DatePickerContext } from './provider';
export const useDatePicker = () => useContext(DatePickerContext);
