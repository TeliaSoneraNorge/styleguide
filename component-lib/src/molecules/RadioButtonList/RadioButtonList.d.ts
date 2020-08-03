import * as React from 'react';

declare interface RadioButtonListList {
  label: string;
  value?: any;
  disabled?: boolean;
}

declare type RadioButtonListType = 'horizontal' | 'vertical';

declare interface RadioButtonListProps {
  list?: RadioButtonListList[];
  selectedIndex?: number;
  name?: string;
  type?: RadioButtonListType;
  hasRichContent?: boolean;
  onChange?: (...args: any[]) => any;
  children?: React.ReactNode;
}

declare const RadioButtonList: React.FC<RadioButtonListProps>;

export default RadioButtonList;
