import * as React from 'react';

export interface MenuSearchProps {
  onSubmit?: (...args: any[]) => any;
  searchLabel?: string;
  searchButtonLabel?: string;
  searchButtonAbortText?: string;
}

export const MenuSearch: React.FC<MenuSearchProps>;

export default MenuSearch;

export const renderSearchField: React.FC;

export default renderSearchField;
