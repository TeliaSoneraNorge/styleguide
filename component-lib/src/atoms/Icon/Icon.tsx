import React, { CSSProperties } from 'react';
import cs from 'classnames';
import { IconSvg, IconDefinition } from './Icon.generated';

export { IconDefinition };

interface Props {
  icon?: IconDefinition;
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
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
    >
      {IconSvg[props.icon]}
    </svg>
  );
}
