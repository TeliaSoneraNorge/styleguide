import * as React from 'react';

export type DropDownListWithLabelLabelMode = 'text-to-right';

export type DropDownListWithLabelOptions =
  | string
  | {
      name?: string;
      value?: string;
    };

export interface DropDownListWithLabelProps {
  labelMode?: DropDownListWithLabelLabelMode;
  visibleLabel?: boolean;
  selectedOption?: string;
  label?: React.ReactNode;
  /**
   * Called on select value change.
   */
  changeSelectedOption?: (...args: any[]) => any;
  options?: DropDownListWithLabelOptions[];
  disabled?: boolean;
}

const DropDownListWithLabel: React.FC<DropDownListWithLabelProps>;

export default DropDownListWithLabel;
