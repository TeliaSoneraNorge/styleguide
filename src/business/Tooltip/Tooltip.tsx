import React, { useState } from 'react';
import cs from 'classnames';

export enum TooltipColor {
  Dark = 'dark',
  Grey = 'grey',
  Purple = 'purple',
}

export enum TooltipPosition {
  TopStart = 'top-start',
  Top = 'top',
  TopEnd = 'top-end',
  Left = 'left',
  Right = 'right',
  BottomStart = 'bottom-start',
  Bottom = 'bottom',
  BottomEnd = 'bottom-end',
}

type TooltipProps = {
  /**
   * Text to be shown in tooltip
   */
  label: string | React.ReactNode;
  /**
   * Text to be shown in tooltip
   */
  color?: TooltipColor;
  /**
   * Placement of tooltip.
   * Default is bottom
   */
  position?: TooltipPosition;
  /**
   * Element to be hovered
   */
  children?: React.ReactElement;
};

export const Tooltip: React.FC<TooltipProps> = ({
  label,
  color = TooltipColor.Dark,
  position = TooltipPosition.Bottom,
  children,
}: TooltipProps) => {
  return (
    <div className="telia-tooltip__container">
      <div className={cs('telia-tooltip', `telia-tooltip--${color}`, `telia-tooltip--${position}`)}>
        <div className="telia-tooltip__arrow"></div>
        <div>{label}</div>
      </div>
      {children}
    </div>
  );
};
