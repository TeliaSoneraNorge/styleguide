//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: delivery.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function DeliveryIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--delivery', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M20.584 27.415l-4-4A2 2 0 0115.998 22v-6a2 2 0 014 0v5l.115.287 3.3 3.3a2 2 0 11-2.829 2.828zM60 37.817v8.184a4.004 4.004 0 01-4 4h-2.295a6.995 6.995 0 01-13.418-.029 1.967 1.967 0 01-.288.03H27.704a6.995 6.995 0 01-13.418-.03 1.966 1.966 0 01-.287.03h-2.134a3.939 3.939 0 01-3.867-4V31.78A13.988 13.988 0 1129.472 14h10.527a4.004 4.004 0 014 4v4h4.93a3.992 3.992 0 013.329 1.782l6.398 9.598A7.972 7.972 0 0160 37.817zm-42.002-5.816c5.523 0 10-4.478 10-10 0-5.524-4.477-10-10-10s-10 4.476-10 10c.006 5.52 4.48 9.993 10 10zm6 16a3 3 0 10-6 0 3 3 0 006 0zm16.001-30h-8.59A13.97 13.97 0 0112 34.63V46h2c.095.003.192.013.287.03A6.995 6.995 0 0127.704 46h12.295V18zm10 30a3 3 0 10-6 0 3 3 0 006 0zm6-10.184a3.986 3.986 0 00-.671-2.218L48.929 26h-4.93v15.685A6.976 6.976 0 0153.705 46h2.294v-8.184z"
        clipRule="evenodd"
      />
    </svg>
  );
}
