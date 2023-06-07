import React, { useRef, useState } from 'react';
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
  const [transformOrigin, setTransformOrigin] = useState('top left');
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipPortalContainer = getTooltipRoot();

  const getTransformOrigin = () => {
    switch (position) {
      case 'top-start':
      case 'bottom-start':
        return 'top right';
      case 'top-end':
        return 'bottom left';
      default:
        return 'top left';
    }
  };

  const getTranslateX = (rect: DOMRect) => {
    switch (position) {
      case 'right':
        return rect.width + 10;
      case 'bottom-start':
      case 'left':
        return -rect.width;
      case 'top-end':
      case 'bottom-end':
        return rect.width / 2;
      case 'top-start':
        return -(rect.width / 2);
      default:
        return 0;
    }
  };

  const getTranslateY = (rect: DOMRect) => {
    switch (position) {
      case 'bottom':
      case 'bottom-end':
      case 'bottom-start':
        return rect.height + 2;
      case 'top-end':
        return -rect.height;
      case 'top':
      case 'top-start':
        return -(rect.height + 2);
      default:
        return 0;
    }
  };

  const mouseEnter = (event: React.BaseSyntheticEvent) => {
    const rect = event.target.getBoundingClientRect();
    setCoords({
      left: rect.left,
      top: rect.top,
    });
    setTransformOrigin(getTransformOrigin());
    setTranslate({
      x: getTranslateX(rect),
      y: getTranslateY(rect),
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
            style={{
              left: coords.left,
              top: coords.top,
              transformOrigin: transformOrigin,
              transform: `translate(${translate.x}px, ${translate.y}px)`,
            }}
          >
            <div className="telia-tooltip__arrow"></div>
            <div>{label}</div>
          </div>,
          tooltipPortalContainer
        )}
    </div>
  );
};
