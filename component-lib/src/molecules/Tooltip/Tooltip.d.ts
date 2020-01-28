import * as React from 'react';

export interface TooltipProps {
  buttonContent?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  isExpanded?: boolean;
  label?: string;
  text?: string;
}

const Tooltip: React.FC<TooltipProps>;

export default Tooltip;
