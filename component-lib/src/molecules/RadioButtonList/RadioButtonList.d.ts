import * as React from 'react';

export interface RadioButtonListList {
  label: string;
  value?: any;
  disabled?: boolean;
}

export type RadioButtonListType = 'horizontal' | 'vertical';

export interface RadioButtonListProps {
  list?: RadioButtonListList[];
  selectedIndex?: number;
  name?: string;
  type?: RadioButtonListType;
  hasRichContent?: boolean;
  onChange?: (...args: any[]) => any;
  children?: React.ReactNode;
}

export const RadioButtonList: React.FC<RadioButtonListProps>;

export default RadioButtonList;
