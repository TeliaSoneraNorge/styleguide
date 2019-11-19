import * as React from 'react';

export interface TabsProps {
    uniqueId?: string;
    selectedIndex?: number;
    onSelect?: (...args: any[])=>any;
}

const Tabs: React.FC<TabsProps>;

export default Tabs;
