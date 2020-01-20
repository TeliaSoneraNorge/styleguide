import * as React from 'react';

export interface IRadioButton {
  label: string;
  value?: any;
  disabled?: boolean;
}

export type RadioButtonGroupType = 'horizontal' | 'vertical';

export interface IRadioButtonGroup {
  list?: IRadioButton[];
  selectedValue?: any;
  name?: string;
  type?: RadioButtonGroupType;
  onChange?: (...args: any[]) => any;
  children?: React.ReactNode;
}


const RadioButtonGroup: React.FC<IRadioButtonGroup>;

export default RadioButtonGroup;
