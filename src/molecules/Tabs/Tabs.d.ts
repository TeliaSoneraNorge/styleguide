import React, { ReactNode } from 'react';

declare interface TabsProps {
  uniqueId?: string;
  selectedIndex?: number;
  onSelect?: (...args: any[]) => any;
  skipPanelRendering?: boolean;
  compact?: boolean;
  fullBorder?: boolean;
  children?: ReactNode | ReactNode[];
}

declare const Tabs: React.FC<TabsProps> & {
  Tab: React.FC<{
    index?: number;
    uniqueId?: string;
    selectedIndex?: number;
    heading?: string;
    onSelect?: (...args: any[]) => any;
    children?: ReactNode | ReactNode[];
  }>;

  TabPanel: React.FC<{
    index?: number;
    uniqueId?: string;
    isSelected?: boolean;
    heading?: string;
    children?: ReactNode | ReactNode[];
  }>;

  TabList: React.FC<{
    children?: ReactNode | ReactNode[];
  }>;
};

export default Tabs;
