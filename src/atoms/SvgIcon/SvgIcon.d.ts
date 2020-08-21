import * as React from 'react';

export interface SvgIconProps {
  /**
   * The name of the icon
   */
  iconName?: string;
  /**
   * The color of the icon (white, black, ... Se Color Palette)
   */
  color?: string;
  /**
   * Other class names
   */
  className?: string;
  title?: string;
  style?: { [key: string]: string | number | boolean }
}

export const SvgIcon: React.FC<SvgIconProps>;

export default SvgIcon;
