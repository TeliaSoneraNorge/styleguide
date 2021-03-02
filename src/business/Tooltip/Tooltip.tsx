import React, { ReactNode, useState } from 'react';
import cs from 'classnames';

type color = 'dark' | 'grey' | 'purple';

type TooltipProps = {
  /**
   * Text to be shown in tooltip
   */
  label: string;
  /**
   * Text to be shown in tooltip
   */
  color?: color;
  /**
   * Placement of tooltip.
   * Default is bottom
   */
  position?: 'top-start' | 'top' | 'top-end' | 'left' | 'right' | 'bottom-start' | 'bottom' | 'bottom-end';
  /**
   * Element to be hovered
   */
  children?: React.ReactElement;
};

export const Tooltip: React.FC<TooltipProps> = (props: TooltipProps) => {
  const { label, color = 'dark', position = 'bottom', children } = props;

  return (
    <div className="telia-tooltip--container">
      {children}
      <div className={cs('telia-tooltip', `telia-tooltip__${color}`, `telia-tooltip__${position}`)}>
        <div className="telia-tooltip--arrow"></div>
        <div>{label}</div>
      </div>
    </div>
  );
};
