//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: router.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function RouterIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--router', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M52 32a8 8 0 018 8v6a8 8 0 01-8 8H12a8 8 0 01-8-8v-6a8 8 0 018-8zm0 4H12a4 4 0 00-4 4v6a4 4 0 004 4h40a4 4 0 004-4v-6a4 4 0 00-4-4zm-24 5a2 2 0 110 4H16a2 2 0 110-4zm12 0a2 2 0 110 4 2 2 0 010-4zm8 0a2 2 0 110 4 2 2 0 010-4zM32 18a11.9 11.9 0 018.42 3.49A2 2 0 0139 24.9a2 2 0 01-1.41-.59 7.92 7.92 0 00-11.18 0 2 2 0 11-2.83-2.82A11.9 11.9 0 0132 18zm-16.24-4c9.333-8.042 23.147-8.042 32.48 0a2 2 0 01-1.3 3.54 1.94 1.94 0 01-1.3-.48c-7.841-6.749-19.439-6.749-27.28 0V17a2 2 0 11-2.6-3z"
      />
    </svg>
  );
}
