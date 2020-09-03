import React, { useContext } from 'react';

export type DropdownContextValues = {
  /**
   * Whetherthe dropdown menu is open or not
   */
  open: boolean;

  /**
   * Toggle dropdown menu open/close
   */
  toggle: () => void;

  /**
   * Set spesific open state of the dropdown menu
   */
  setMenuOpen: (open: boolean) => void;

  /**
   * Reference to the dropdown menu element
   */
  menuRef: React.RefObject<HTMLDivElement>;

  /**
   * Reference to the container of the entire dropdown wrapper
   */
  dropdownRef: React.RefObject<HTMLDivElement>;
  /**
   * The indext of the current active DropdownItem.
   * Only clickable items can be highlighted
   * -1 indicates no highlighted item
   */
  highlightIndex: number;

  /**
   * Set the index of the highlighted element
   */
  setHighlightIndex: (index: number) => void;

  /**
   * The highest index of any item that can be highlighted.
   * This is used to know when the highlighted index should
   * be set back to 0 for circular navigation,
   * and prevent navigation to non-existing elements
   */
  maxHighlightIndex: number;

  /**
   * An indexed list of the clickhandlers for clickable dropdown items.
   * Used to "click" highlighted item by hightlight index, in useAccessibleDropdown
   */
  clickHandlers?: Array<() => void>;

  /**
   * All dropdown items / content of the dropdown menu
   */
  allItems: React.ReactNode[];
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
