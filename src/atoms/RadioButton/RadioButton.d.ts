import * as React from 'react';

export interface RadioButtonProps {
  label?: string;
  name?: string;
  value?: any;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (...args: any[]) => any;
  setChecked?: (checked: boolean) => any;
  children?: React.ReactNode;
}

export const RadioButton: React.FC<RadioButtonProps>;

export default RadioButton;
