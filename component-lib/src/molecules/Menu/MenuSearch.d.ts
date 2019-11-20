import * as React from 'react';

export interface MenuSearchProps {
  onSubmit?: (...args: any[]) => any;
  searchLabel?: string;
  searchButtonLabel?: string;
  searchButtonAbortText?: string;
}

const MenuSearch: React.FC<MenuSearchProps>;

export default MenuSearch;

const renderSearchField: React.FC;

export default renderSearchField;
