//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: check-circle-filled.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function CheckCircleFilledIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--check-circle-filled', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28C59.983 16.543 47.457 4.017 32 4zm12.561 20.58L31.638 43.963a2.15 2.15 0 01-3.315.328l-8.615-8.615a2.154 2.154 0 013.046-3.046l6.758 6.757L40.977 22.19a2.154 2.154 0 113.584 2.39z"
        clipRule="evenodd"
      />
    </svg>
  );
}
