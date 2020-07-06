import React, { useRef, useState } from 'react';
import { DropdownContext, useDropdownContext, useA11yDropdown } from './index';

type Props = {
  open?: boolean;
  toggle?: () => void;
};

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
