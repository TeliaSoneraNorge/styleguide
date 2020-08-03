import * as React from 'react';

declare interface PageMenuMenuLinks {
  heading?: string;
  loggedInLinks?: {
    text?: string;
    url?: string;
    icon?: string;
  }[];
  loggedOutLinks?: {
    text?: string;
    url?: string;
    icon?: string;
  }[];
}

declare interface PageMenuProps {
  menuLinks?: PageMenuMenuLinks[];
  menuId?: string;
  isExpanded?: boolean;
  onClickClose?: (...args: any[]) => any;
  searchUrl?: string;
  logoutLink?: string;
  fixedPosition?: boolean;
  isLoggedIn?: boolean;
  menuSelectedTabIndex?: number;
  onTabSelect?: (...args: any[]) => any;
}

declare const PageMenu: React.FC<PageMenuProps>;

export default PageMenu;
