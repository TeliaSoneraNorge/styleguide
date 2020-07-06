import React, { useRef, useState } from 'react';
import { DropdownContext, useDropdownContext, DropdownContextValues } from './context';
import { useA11yDropdown } from './useA11yDropdown';

type Props = {
  open?: boolean;
  toggle?: () => void;
};

export const Dropdown: React.FC<Props> = props => {
  const [open, setOpen] = useState(props.open || false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [maxHighlightIndex, setMaxHighlightIndex] = useState(highlightIndex);

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
  };

  return (
    <DropdownContext.Provider value={contextValue}>
      <InnerDropdown>{props.children}</InnerDropdown>
    </DropdownContext.Provider>
  );
};

const InnerDropdown: React.FC = props => {
  const { dropdownRef } = useDropdownContext();
  useA11yDropdown();
  return (
    <div>
      <div className="Business-Dropdown" ref={dropdownRef}>
        {props.children}
      </div>
    </div>
  );
};
