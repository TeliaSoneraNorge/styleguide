//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: alarm.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function AlarmIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--alarm', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M42.386 54.049a2 2 0 0 1-.166 3.491A22.09 22.09 0 0 1 32 60a22.09 22.09 0 0 1-10.22-2.51A2 2 0 0 1 23.64 54 18.09 18.09 0 0 0 32 56a17.85 17.85 0 0 0 8.36-2 2 2 0 0 1 2.026.049zM28.504 5.177A6 6 0 0 1 37.74 11.8c6.45 2.57 12 8.12 12 15.06 0 9.07 1.42 14.6 5.42 21.14a2.59 2.59 0 0 1 .03 2.62A2.68 2.68 0 0 1 52.84 52H11.16a2.68 2.68 0 0 1-2.32-1.38 2.59 2.59 0 0 1 0-2.62c4-6.54 5.42-12.07 5.42-21.14 0-6.94 5.55-12.49 12-15.06a6 6 0 0 1 2.244-6.623zM32.04 8.01a2 2 0 0 0-2 2 1.56 1.56 0 0 0 0 .2 3.43 3.43 0 0 0 0 .41 38.7 38.7 0 0 0 .59 4 18.16 18.16 0 0 0-1.8.52c-5.17 1.72-10.57 5.97-10.57 11.72 0 8.94-1.28 14.76-4.79 21.14h37.14c-3.51-6.38-4.79-12.2-4.79-21.14 0-5.72-5.4-9.97-10.57-11.72a18.16 18.16 0 0 0-1.8-.52 38.7 38.7 0 0 0 .59-4 3.43 3.43 0 0 0 0-.41 1.56 1.56 0 0 0 0-.2 2 2 0 0 0-2-2z"
      />
    </svg>
  );
}
