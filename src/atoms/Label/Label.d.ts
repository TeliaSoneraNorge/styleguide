import * as React from 'react';

declare interface LabelProps {
  /**
   * Content of this label.
   */
  text?: string;
  /**
   * Content of this label.
   */
  children?: React.ReactNode;
  isUsingGrayText?: boolean;
  className?: string;
}

declare const Label: React.FC<LabelProps>;

export default Label;
