import * as React from 'react';

export interface FunkyTabsProps {
    selectedIndex?: number;
    onSelect?: (...args: any[])=>any;
    uniqueId?: string;
}

const FunkyTabs: React.FC<FunkyTabsProps>;

export default FunkyTabs;
