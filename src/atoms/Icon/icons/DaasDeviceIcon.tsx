//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: daas-device.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function DaasDeviceIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--daas-device', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M33 52a2 2 0 11-4 0 2 2 0 014 0z" />
      <path
        fillRule="evenodd"
        d="M23 4a8 8 0 00-8 8v40a8 8 0 008 8h16a8 8 0 008-8V37a2 2 0 10-4 0v7H19V12a4 4 0 014-4h16a4 4 0 014 4v3.5a2 2 0 104 0V12a8 8 0 00-8-8H23zm-4 44v4a4 4 0 004 4h16a4 4 0 004-4v-4H19z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M48.367 20.572a2 2 0 01.173 2.823L36.279 37.258a2 2 0 01-2.936.065l-6.641-6.866a2 2 0 112.875-2.78l5.138 5.311 10.828-12.243a2 2 0 012.824-.173z"
        clipRule="evenodd"
      />
    </svg>
  );
}
