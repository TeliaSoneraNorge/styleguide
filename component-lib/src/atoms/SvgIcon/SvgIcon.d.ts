import * as React from 'react';

export interface SvgIconProps {
  /**
   * The name of the icon
   */
  iconName?: string;
  /**
   * The color of the icon (white, black, purple, grey or none)
   */
  color?: any;
  /**
   * Other class names
   */
  className?: string;
  title?: string;
}

const SvgIcon: React.FC<SvgIconProps>;

export default SvgIcon;
