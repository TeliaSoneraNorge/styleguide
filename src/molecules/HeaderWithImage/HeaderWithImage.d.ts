import * as React from 'react';

export interface HeaderWithImageProps {
  imgSrcMobile?: string;
  imgSrcDesktop?: string;
  blackText?: boolean;
  whiteText?: boolean;
  withGradient?: boolean;
  pageTitle: string;
  children?: React.ReactNode;
}

export const HeaderWithImage: React.FC<HeaderWithImageProps>;

export default HeaderWithImage;
