//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: more-horizontal.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function MoreHorizontalIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--more-horizontal', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M18 36a4 4 0 110-8 4 4 0 010 8zm10-4a4 4 0 108 0 4 4 0 00-8 0zm18 4a4 4 0 110-8 4 4 0 010 8z"
        clipRule="evenodd"
      />
    </svg>
  );
}
