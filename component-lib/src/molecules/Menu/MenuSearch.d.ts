import * as React from 'react';

declare interface MenuSearchProps {
  onSubmit?: (...args: any[]) => any;
  searchLabel?: string;
  searchButtonLabel?: string;
  searchButtonAbortText?: string;
}

declare const MenuSearch: React.FC<MenuSearchProps>;

export default MenuSearch;
