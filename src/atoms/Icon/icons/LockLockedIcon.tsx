//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: lock-locked.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function LockLockedIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--lock-locked', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M32 6c7.732 0 14 6.268 14 14v6a6 6 0 012.34.47l.227.102A6 6 0 0152 32v6a19.81 19.81 0 01-.49 4.38c-2.24 9.936-11.59 16.6-21.714 15.478C19.673 56.736 12.01 48.185 12 38v-6a6 6 0 013.67-5.53l.28-.11A6 6 0 0118 26v-6c0-7.732 6.268-14 14-14zm14 24H18a2 2 0 00-.79.2h-.1A2 2 0 0016 32v6c-.001 1.174.13 2.345.39 3.49 1.788 7.95 9.266 13.287 17.366 12.392C41.856 52.988 47.989 46.15 48 38v-6a2 2 0 00-1.12-1.84h-.09A2 2 0 0046 30zm-13.303 4.057A4 4 0 0134 41.46V48a2 2 0 11-4 0v-6.54a4 4 0 012.697-7.403zM32 10c-5.523 0-10 4.477-10 10v6h20v-6c0-5.523-4.477-10-10-10z"
      />
    </svg>
  );
}
