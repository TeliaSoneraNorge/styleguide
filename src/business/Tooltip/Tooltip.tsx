import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import cs from 'classnames';
import { getTooltipRoot } from './getTooltipRoot';

type color = 'dark' | 'grey' | 'purple';

type TooltipProps = {
  /**
   * Text to be shown in tooltip
   */
  label: string | React.ReactNode;
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

export const Tooltip: React.FC<TooltipProps> = ({
  label,
  color = 'dark',
  position = 'bottom',
  children,
}: TooltipProps) => {
  const [coords, setCoords] = useState({ left: 0, top: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipPortalContainer = getTooltipRoot();

  const getLeftCoordinate = (rect: DOMRect) => {
    switch (position) {
      case 'top-start':
      case 'bottom-start':
        return rect.left - rect.width / 2;
      case 'top':
      case 'bottom':
        return rect.left;
      case 'top-end':
      case 'bottom-end':
        return rect.left + rect.width / 2;
      case 'left':
        return rect.left - rect.width;
      case 'right':
        return rect.right + 10;
      default:
        return rect.left;
    }
  };

  const getTopCoordinate = (rect: DOMRect) => {
    switch (position) {
      case 'top':
      case 'top-start':
      case 'top-end':
        return rect.top - 50;
      case 'bottom':
      case 'bottom-start':
      case 'bottom-end':
        return rect.top + rect.height + 2;
      case 'left':
      case 'right':
        return rect.top;
      default:
        return rect.top + rect.height;
    }
  };

  const mouseEnter = (event: React.BaseSyntheticEvent) => {
    const rect = event.target.getBoundingClientRect();
    setCoords({
      left: getLeftCoordinate(rect),
      top: getTopCoordinate(rect),
    });
    setShowTooltip(true);
  };

  const mouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="telia-tooltip__container" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      {children}
      {showTooltip &&
        createPortal(
          <div
            className={cs('telia-tooltip', `telia-tooltip--${color}`, `telia-tooltip--${position}`)}
            style={{ left: coords.left, top: coords.top }}
          >
            <div className="telia-tooltip__arrow"></div>
            <div>{label}</div>
          </div>,
          tooltipPortalContainer
        )}
    </div>
  );
};
