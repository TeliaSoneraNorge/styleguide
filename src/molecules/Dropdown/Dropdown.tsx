import React, { useRef, useState } from 'react';
import { DropdownContext, useDropdownContext, DropdownContextValues } from './context';
import { useAccessibleDropdown } from './useAccessibleDropdown';
import { getIndexedDropdownItems, getMaxHighlightIndex } from './utils';

type Props = {
  open?: boolean;
  toggle?: () => void;
};

export const Dropdown: React.FC<Props> = props => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(props.open || false);
  const [highlightIndex, setHighlightIndex] = useState<number>(-1); // -1 indicates no highlighted item

  const allItems: React.ReactNode = getIndexedDropdownItems(props.children);
  const maxHighlightIndex = getMaxHighlightIndex(props.children);

  const toggle = () => setOpen(!open);

  const contextValue: DropdownContextValues = {
    open: props.open ? props.open : open,
    toggle: props.toggle ? props.toggle : toggle,
    setMenuOpen: setOpen,
    menuRef,
    dropdownRef,
    highlightIndex,
    setHighlightIndex,
    maxHighlightIndex,
    allItems,
  };
  return (
    <DropdownContext.Provider value={contextValue}>
      <InnerDropdown>{props.children}</InnerDropdown>
    </DropdownContext.Provider>
  );
};

const InnerDropdown: React.FC = props => {
  const { dropdownRef } = useDropdownContext();
  useAccessibleDropdown();
  return (
    <div className="telia-dropdown" ref={dropdownRef}>
      {props.children}
    </div>
  );
};
