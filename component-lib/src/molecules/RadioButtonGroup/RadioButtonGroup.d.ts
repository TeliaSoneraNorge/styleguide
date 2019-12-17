import * as React from 'react';

export interface RadioButtonGroupList {
  label: string;
  value?: any;
  disabled?: boolean;
}

export type RadioButtonGroupType = 'horizontal' | 'vertical';

export interface RadioButtonGroupProps {
  list?: RadioButtonGroupList[];
  selectedValue?: any;
  name?: string;
  type?: RadioButtonGroupType;
  onChange?: (...args: any[]) => any;
  children?: React.ReactNode;
}


const RadioButtonGroup: React.FC<RadioButtonGroupProps>;

export default RadioButtonGroup;
