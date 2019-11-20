import * as React from 'react';

export interface LabelProps {
  /**
   * Content of this label.
   */
  text?: React.ReactNode;
  /**
   * Content of this label.
   */
  children?: React.ReactNode;
  isUsingGrayText?: boolean;
}

const Label: React.FC<LabelProps>;

export default Label;
