import * as React from 'react';

declare interface RadioButtonWithLabelProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: any;
  /**
   * Decides whenever should render label or children.
   */
  hasRichContent?: boolean;
  onChange?: (...args: any[]) => any;
  children?: React.ReactNode;
}

declare const RadioButtonWithLabel: React.FC<RadioButtonWithLabelProps>;

export default RadioButtonWithLabel;
