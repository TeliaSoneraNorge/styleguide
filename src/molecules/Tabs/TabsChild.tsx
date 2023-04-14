import { ReactElement } from 'react';

type TabsProps = {
  heading?: string;
  index?: number;
  uniqueId?: string;
  isSelected?: boolean;
};

export type TabsChild = ReactElement<TabsProps> | ReactElement<TabsProps>[];
