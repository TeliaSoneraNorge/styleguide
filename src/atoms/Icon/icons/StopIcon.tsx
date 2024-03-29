//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: stop.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function StopIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--stop', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M18 32a2 2 0 002 2h24a2 2 0 100-4H20a2 2 0 00-2 2z" />
      <path
        fillRule="evenodd"
        d="M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28A28 28 0 0032 4zm0 4c13.255 0 24 10.745 24 24S45.255 56 32 56 8 45.255 8 32 18.745 8 32 8z"
        clipRule="evenodd"
      />
    </svg>
  );
}
