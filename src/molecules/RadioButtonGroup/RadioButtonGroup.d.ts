import * as React from 'react';

declare interface RadioButtonProps {
  label: string;
  value?: any;
  disabled?: boolean;
}

declare type RadioButtonGroupType = 'horizontal' | 'vertical';

declare interface RadioButtonGroupProps {
  list?: RadioButtonProps[];
  selectedValue?: any;
  name?: string;
  type?: RadioButtonGroupType;
  onChange?: (...args: any[]) => any;
  children?: React.ReactNode;
}

declare const RadioButtonGroup: React.FC<RadioButtonGroupProps>;

export default RadioButtonGroup;
