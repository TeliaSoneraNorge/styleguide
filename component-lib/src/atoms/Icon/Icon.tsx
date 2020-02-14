import React, { CSSProperties } from 'react';
import cs from 'classnames';
import { IconSvg, IconDefinition } from './Icon.generated';

interface Props {
  /**
   * The icon to show. Must be a valid `IconDefinition`.
   */
  icon?: IconDefinition;

  /**
   * An optional title for accessibility.
   */
  title?: string;

  /**
   * Add a slow spin to the icon (e.g. loading indicators)
   */
  spin?: boolean;

  /**
   * Any additional CSS classes.
   */
  className?: string;

  /**
   * Any additional CSS properties.
   */
  style?: CSSProperties;
}

export function Icon(props: Props) {
  if (!props.icon) {
    return null;
  }

  return (
    <svg
      className={cs('Icon', `Icon--${props.icon}`, props.spin ? 'Icon--spin' : undefined, props.className)}
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      aria-hidden={props.title ? undefined : true}
    >
      {props.title && <title>{props.title}</title>}
      {IconSvg[props.icon]}
    </svg>
  );
}
