import React, { useRef, useState } from 'react';
import { DropdownContext, useDropdownContext, DropdownContextValues } from './context';
import { useAccessibleDropdown } from './useAccessibleDropdown';

type Props = {
  open?: boolean;
  toggle?: () => void;
};

export const Dropdown: React.FC<Props> = props => {
  const [open, setOpen] = useState(props.open || false);
  const [highlightIndex, setHighlightIndex] = useState<number>(-1); // -1 indicates no highlighted item
  const [maxHighlightIndex, setMaxHighlightIndex] = useState(highlightIndex);
  const [clickHandlers, setClickHandlers] = useState<Array<() => void>>([]);

  const toggle = () => setOpen(!open);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const contextValue: DropdownContextValues = {
    open: props.open ? props.open : open,
    toggle: props.toggle ? props.toggle : toggle,
    setMenuOpen: setOpen,
    menuRef,
    dropdownRef,
    highlightIndex,
    setHighlightIndex,
    maxHighlightIndex,
    setMaxHighlightIndex,
    clickHandlers,
    setClickHandlers,
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
    <div className="Business-Dropdown" ref={dropdownRef}>
      {props.children}
    </div>
  );
};
