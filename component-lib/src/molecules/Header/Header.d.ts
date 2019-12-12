import * as React from 'react';

export type HeaderBackgroundColor = 'white';

export interface HeaderProps {
  videoSrc?: string;
  videoTitle?: string;
  iconName?: string;
  hideIconOnDesktop?: boolean;
  runningTitle?: string;
  pageTitle: string;
  withMask?: boolean;
  withContentOverlap?: boolean;
  withBorderBottom?: boolean;
  backgroundColor?: HeaderBackgroundColor;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps>;

export default Header;
