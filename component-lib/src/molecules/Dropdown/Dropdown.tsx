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
   * Recursively get all valid dropdown items to support of wrapping components etc.
   */
  const allItems: React.ReactNode[] = getDropdownItems(props.children);
  const clickableItems = allItems.filter(isClickable);

  const maxHighlightIndex = clickableItems.length - 1;
  const clickHandlers = clickableItems
    .map(child => React.isValidElement<DropdownItemProps>(child) && child.props.onClick)
    .filter(isDefined);

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
    clickHandlers,
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

function isDefined(entry: false | (() => void) | undefined): entry is () => void {
  return !!entry;
}
const isClickable = (child: React.ReactNode) =>
  React.isValidElement<DropdownItemProps>(child) && !child.props.header && !child.props.divider && child.props.onClick;

// @ts-ignore
function getRecursiveItems(children: React.ReactNode, index: number) {
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
      return getRecursiveItems(child.props.children, index);
    }
    return child;
  });
}

function getDropdownItems(children: React.ReactNode) {
  return React.Children.map(children, child => {
    if (React.isValidElement<{ children: React.ReactNode }>(child) && (child as any).type.name === 'DropdownMenu') {
      return getRecursiveItems(child.props.children, -1);
    } else {
      return null;
    }
  });
}
