import * as React from 'react';

export interface CheckBoxWithLabelProps {
  label: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (...args: any[]) => any;
  disabled?: boolean;
  name?: string;
}

const CheckBoxWithLabel: React.FC<CheckBoxWithLabelProps>;

export default CheckBoxWithLabel;
