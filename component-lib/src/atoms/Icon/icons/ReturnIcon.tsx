//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: return.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function ReturnIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--return', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M60 28v12a8 8 0 0 1-8 8H10.44l8.29 8.29a2 2 0 1 1-2.83 2.83L5.44 48.65a3.65 3.65 0 0 1 0-5.15L15.9 33a2 2 0 1 1 2.83 2.82L10.6 44H52a4 4 0 0 0 4-4V28a4 4 0 0 0-4-4h-9.18a2 2 0 1 1 0-4H52a8 8 0 0 1 8 8z"
      />
    </svg>
  );
}
