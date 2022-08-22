//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: plus.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function PlusIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--plus', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M34.167 52V13a2.167 2.167 0 00-4.334 0v39a2.167 2.167 0 004.334 0z"
        clipRule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M51.5 30h-39a2.167 2.167 0 000 4.333h39a2.167 2.167 0 100-4.333z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
