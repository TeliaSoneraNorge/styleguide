import * as React from 'react';

export interface RadioButtonProps {
  label?: string;
  name?: string;
  value?: any;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

export const RadioButton: React.FC<RadioButtonProps>;

export default RadioButton;
