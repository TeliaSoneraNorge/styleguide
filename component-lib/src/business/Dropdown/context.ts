import React, { useContext } from 'react';

export type DropdownContextValues = {
  open: boolean;
  toggle: () => void;
  menuRef: React.RefObject<HTMLDivElement>;
  dropdownRef: React.RefObject<HTMLDivElement>;
  highlightIndex: number;
  setHighlightIndex: (index: number) => void;
  setMaxHighlightIndex: (index: number) => void;
  maxHighlightIndex: number;
  setMenuOpen: (open: boolean) => void;
};

export const DropdownContext = React.createContext<DropdownContextValues | null>(null);
export const useDropdownContext = () => {
  const value = useContext(DropdownContext);
  if (!value) {
    throw new Error(
      'No dropdown context found. This is typically caused by trying to render DropdownItem, DropdownToggle or DropdownMenu components outside of a Dropdown.'
    );
  }
  return value;
};
