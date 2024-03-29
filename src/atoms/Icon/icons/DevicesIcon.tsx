//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: devices.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function DevicesIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--devices', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M50 4H30a8.01 8.01 0 00-8 8v4h-8a8.01 8.01 0 00-8 8v28a8.01 8.01 0 008 8h10a8.007 8.007 0 007.737-6H50a8.01 8.01 0 008-8V12a8.01 8.01 0 00-8-8zM30 8h20a4.004 4.004 0 014 4v26H32V24a8.007 8.007 0 00-6-7.737V12a4.004 4.004 0 014-4zM14 20h10a4.004 4.004 0 014 4v20H10V24a4.004 4.004 0 014-4zm10 36H14a4.004 4.004 0 01-4-4v-4h18v4a4.004 4.004 0 01-4 4zm30-10a4.004 4.004 0 01-4 4H32v-8h22v4zm-16 0a2 2 0 114 0 2 2 0 01-4 0zm-17 6a2 2 0 11-4 0 2 2 0 014 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
