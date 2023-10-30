import * as React from 'react';
import { IconDefinition } from '../../atoms/Icon/index';

export type HeaderBackgroundColor = 'white';

export interface HeaderProps {
  videoSrc?: string;
  videoTitle?: string;
  iconName?: IconDefinition;
  hideIconOnDesktop?: boolean;
  runningTitle?: string;
  pageTitle: string;
  withMask?: boolean;
  withContentOverlap?: boolean;
  withBorderBottom?: boolean;
  backgroundColor?: HeaderBackgroundColor;
  children?: React.ReactNode;
  dataTrackingId?: string;
}

export const Header: React.FC<HeaderProps>;

export default Header;
