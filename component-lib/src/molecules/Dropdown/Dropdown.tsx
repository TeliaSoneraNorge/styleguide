import React, { useRef, useState } from 'react';
import { DropdownContext, useDropdownContext, DropdownContextValues } from './context';
import { useAccessibleDropdown } from './useAccessibleDropdown';
import { DropdownItemProps } from './DropdownItem';

type Props = {
  open?: boolean;
  toggle?: () => void;
};

export const Dropdown: React.FC<Props> = props => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(props.open || false);
  const [highlightIndex, setHighlightIndex] = useState<number>(-1); // -1 indicates no highlighted item

  /**
   *Get all valid dropdown items and recursively set index of items
   */
  const allItems: React.ReactNode[] = getDropdownItems(props.children);

  /**
   * Retrieve a flat list of all clickable dropdown items
   */
  const clickableItems = getDropdownItems(props.children, true).filter(isClickable);
  const maxHighlightIndex = clickableItems.length - 1;

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

const isClickable = (child: React.ReactNode) =>
  React.isValidElement<DropdownItemProps>(child) && !child.props.header && !child.props.divider && child.props.onClick;

// @ts-ignore
function getRecursiveItems(children: React.ReactNode, index: number, flat?: boolean) {
  return React.Children.map(children, child => {
    if (
      React.isValidElement<DropdownItemProps>(child) &&
      isClickable(child) &&
      (child as any).type.name === 'DropdownItem'
    ) {
      index += 1;
      return React.cloneElement(child, {
        index,
      });
    } else if (React.isValidElement<{ children: React.ReactNode }>(child) && child.props.children) {
      if (flat) {
        return getRecursiveItems(child.props.children, index);
      } else {
        return React.cloneElement(child, { ...child.props, children: getRecursiveItems(child.props.children, index) });
      }
    }
    return child;
  });
}

function getDropdownItems(children: React.ReactNode, flat?: boolean) {
  return React.Children.map(children, child => {
    if (React.isValidElement<{ children: React.ReactNode }>(child) && (child as any).type.name === 'DropdownMenu') {
      return getRecursiveItems(child.props.children, -1, flat);
    } else {
      return null;
    }
  });
}
