import * as React from 'react';

export interface FunkyTabsProps {
  selectedIndex?: number;
  onSelect?: (...args: any[]) => any;
  uniqueId?: string;
}

const FunkyTabs: React.FC<FunkyTabsProps> & {
  TabPanel: React.FC<{
    index?: number;
    uniqueId?: string;
    isSelected?: boolean;
    heading?: string;
    url?: string;
    imagePath?: string;
  }>;
};

export default FunkyTabs;
