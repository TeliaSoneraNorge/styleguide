import * as React from 'react';

export interface TooltipProps {
    label?: string;
    text?: string;
    isExpanded?: boolean;
}

const Tooltip: React.FC<TooltipProps>;

export default Tooltip;
