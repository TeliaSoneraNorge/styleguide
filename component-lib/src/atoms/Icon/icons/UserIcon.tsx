//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: user.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

export function UserIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--user', props.className)}
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      <path
        fill="#222"
        fill-rule="evenodd"
        d="M45.61 30.36A15.78 15.78 0 0 0 48 22c0-8.837-7.163-16-16-16s-16 7.163-16 16a15.78 15.78 0 0 0 2.39 8.36A18 18 0 0 0 4 48v2a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8v-2a18 18 0 0 0-14.39-17.64zM32 10c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm24 40a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4v-2c-.005-7.533 5.952-13.72 13.48-14a15.92 15.92 0 0 0 21 0c7.544.259 13.524 6.452 13.52 14v2z"
      />
    </svg>
  );
}
