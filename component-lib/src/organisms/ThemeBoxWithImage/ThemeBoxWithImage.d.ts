import * as React from 'react';

declare interface ThemeBoxWithImageProps {
  id?: string;
  /**
   * State if box starts in expanded state
   */
  isExpanded?: boolean;
  /**
   * Location of image file
   */
  imageSrc?: string;
  heading?: string;
  children?: React.ReactNode;
}

export default class ThemeBoxWithImage extends React.Component<ThemeBoxWithImageProps, any> {
  render(): JSX.Element;
}
