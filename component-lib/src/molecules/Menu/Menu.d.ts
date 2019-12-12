import * as React from 'react';

export interface MenuMenuLinks {
  heading?: {
    text?: string;
    url?: string;
  };
  links?: {
    text?: string;
    url?: string;
  }[];
}

export interface MenuProps {
  menuLinks?: MenuMenuLinks[];
  logoImageDesktopPath?: string;
  logoImageInverseDesktopPath?: string;
  logoTitle?: string;
  logoUrl?: string;
  activeIndex?: number;
  activeLinkIndex?: number;
  onSearchSubmit?: (...args: any[]) => any;
  searchLabel?: string;
  searchButtonLabel?: string;
  searchButtonAbortText?: string;
  mobileMenuCloseButtonLabel?: string;
  linkTemplate?: (...args: any[]) => any;
  lockBodyOnMenuOpen?: boolean;
  isLoggedIn?: boolean;
  loginUrl?: string;
  myPageUrl?: string;
  cartUrl?: string;
  isLoading?: boolean;
  onlyLogo?: boolean;
}

const Menu: React.FC<MenuProps>;

export default Menu;
