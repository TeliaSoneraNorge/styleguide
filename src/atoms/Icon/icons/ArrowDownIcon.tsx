//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: arrow-down.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function ArrowDownIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--arrow-down', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M31.147 44.903L11.554 20.74a2 2 0 00-3.107 2.52l21.083 26a2 2 0 003.054.063l22.916-26a2 2 0 10-3-2.645L31.147 44.903z"
      />
    </svg>
  );
}
