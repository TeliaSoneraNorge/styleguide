import React, { useContext } from 'react';
import { DropdownContextValues } from './index';

export const DropdownContext = React.createContext<DropdownContextValues | null>(null);
export const useDropdownContext = () => {
  const value = useContext(DropdownContext);
  if (!value) {
    throw new Error('No dropdown context');
  }
  return value;
};
