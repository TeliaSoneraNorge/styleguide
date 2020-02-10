//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: place.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function PlaceIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--place', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M32 4a20 20 0 0 1 20 20c0 12.49-13.63 28.11-17.81 32.55a3 3 0 0 1-2.19 1l-.207-.007a3 3 0 0 1-1.983-.943C25.63 52.11 12 36.49 12 24c0-11.046 8.954-20 20-20zm0 4c-8.837 0-16 7.163-16 16 0 10.53 12.07 24.73 16 29.07C35.93 48.73 48 34.53 48 24c0-8.837-7.163-16-16-16zm0 6a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zm0 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"
      />
    </svg>
  );
}
