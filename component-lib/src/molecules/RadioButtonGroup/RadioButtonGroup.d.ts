import * as React from 'react';

export interface RadioButtonProps {
  label: string;
  value?: any;
  disabled?: boolean;
}

export type RadioButtonGroupType = 'horizontal' | 'vertical';

export interface RadioButtonGroupProps {
  list?: RadioButtonProps[];
  selectedValue?: any;
  name?: string;
  type?: RadioButtonGroupType;
  onChange?: (...args: any[]) => any;
  children?: React.ReactNode;
}


export const RadioButtonGroup: React.FC<RadioButtonGroupProps>;

export default RadioButtonGroup;
