import React, { CSSProperties } from 'react';
import cs from 'classnames';

import { IconDefinition } from './IconDefinition';

interface IconProps {
  /**
   * The icon to show.
   */
  icon: IconDefinition;

  /**
   * Any additional CSS classes.
   */
  className?: string;

  /**
   * Any additional CSS properties.
   */
  style?: CSSProperties;

  /**
   * An optional title for accessibility.
   */
  title?: string;
}

/**
 * Display a SVG icon from a predefined set of icons.
 */
export function Icon(props: IconProps) {
  return (
    <svg
      className={cs('Business-Icon', `Business-Icon--${props.icon}`, props.className)}
      aria-hidden={props.title ? undefined : true}
      style={props.style}
    >
      {props.title && <title>{props.title}</title>}
      <use xlinkHref={`#${props.icon}`}></use>
    </svg>
  );
}
