import * as React from 'react';

declare interface TooltipProps {
  buttonContent?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  isExpanded?: boolean;
  label?: string;
  text?: string;
}

declare const Tooltip: React.FC<TooltipProps>;

export default Tooltip;
