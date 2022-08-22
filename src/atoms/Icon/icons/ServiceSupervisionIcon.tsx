//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: service-supervision.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function ServiceSupervisionIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--service-supervision', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M29 52a2 2 0 11-4 0 2 2 0 014 0z" />
      <path
        fillRule="evenodd"
        d="M19 4a8 8 0 00-8 8v40a8 8 0 008 8h16a8 8 0 008-8V42a2 2 0 10-4 0v2H15V12a4 4 0 014-4h16.5a4 4 0 014 4 2 2 0 104 0 8 8 0 00-8-8H19zm-4 44v4a4 4 0 004 4h16a4 4 0 004-4v-4H15z"
        clipRule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M23.506 26.9c4.18 5.655 8.585 8.1 12.602 8.1 4.017 0 8.364-2.445 12.423-8.114-4.435-5.611-8.593-7.916-12.407-7.886-3.833.03-8.058 2.419-12.618 7.9zM36.092 15c5.965-.046 11.466 3.81 16.516 10.633a2 2 0 01.062 2.29C48.01 34.993 42.284 39 36.108 39c-6.165 0-11.961-3.995-16.762-11.052a2 2 0 01.077-2.356C24.603 18.955 30.16 15.047 36.093 15z"
        clip-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M36 24a3 3 0 100 6 3 3 0 000-6zm-7 3a7 7 0 1114 0 7 7 0 01-14 0z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
