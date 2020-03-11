import * as React from 'react';

export interface TextBoxWithLabelProps {
  labelText?: string;
  hideLabel?: boolean;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
  disabled?: boolean;
  withIcon?: boolean;
  iconName?: string;
  iconColor?: string;
  iconIsButton?: boolean;
  iconLabel?: string;
  value?: string;
  ref?: any;
  onChange?: (e: React.SyntheticEvent) => void;
}

const TextBoxWithLabel: React.FC<TextBoxWithLabelProps>;

export default TextBoxWithLabel;
