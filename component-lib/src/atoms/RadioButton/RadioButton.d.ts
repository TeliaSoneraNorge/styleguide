import * as React from 'react';

export interface IRadioButtonProps {
  label?: string;
  name?: string;
  value?: any;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (...args: any[]) => any;
  children?: React.ReactNode;
}

const RadioButton: React.FC<IRadioButtonProps>;

export default RadioButton;
