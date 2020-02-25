import * as React from 'react';

export interface TabsProps {
  uniqueId?: string;
  selectedIndex?: number;
  onSelect?: (...args: any[]) => any;
  skipPanelRendering?: boolean;
}

const Tabs: React.FC<TabsProps> & {
  Tab: React.FC<{
    index?: number;
    uniqueId?: string;
    selectedIndex?: number;
    heading?: string;
    onSelect?: (...args: any[]) => any;
  }>;

  TabPanel: React.FC<{
    index?: number;
    uniqueId?: string;
    isSelected?: boolean;
  }>;

  TabList: React.FC;
};

export default Tabs;
