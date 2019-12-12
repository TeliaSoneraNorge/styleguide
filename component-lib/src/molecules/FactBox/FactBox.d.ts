import * as React from 'react';

export interface FactBoxProps {
  /**
   * Text about the fact.
   */
  children: React.ReactNode;
  /**
   * Title of the fact.
   */
  title: string;
  /**
   * Used iff imgSrc is specified.
   */
  imgAlt?: string;
  /**
   * Shows this image iff specified.
   */
  imgSrc?: string;
  /**
   * Shows this icon iff specified
   */
  iconName?: string;
  /**
   * Centers the icon
   */
  centerIcon?: boolean;
}

const FactBox: React.FC<FactBoxProps>;

export default FactBox;
