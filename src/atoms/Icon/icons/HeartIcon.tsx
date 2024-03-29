//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: heart.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function HeartIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--heart', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M55.792 11.713a15.241 15.241 0 00-22.04 0l-1.598 1.65-1.598-1.65a15.241 15.241 0 00-22.04 0c-6.021 6.321-6.021 16.257 0 22.578l20.527 21.22a4.322 4.322 0 006.223 0l20.526-21.22c6.021-6.321 6.021-16.257 0-22.578zm-3.115 19.565l-20.52 21.22-20.526-21.22c-4.415-4.634-4.415-11.918 0-16.552a10.908 10.908 0 0115.811 0l3.155 3.26a2.232 2.232 0 003.115 0l3.154-3.26a10.908 10.908 0 0115.811 0c4.415 4.634 4.415 11.918 0 16.552z"
        clipRule="evenodd"
      />
    </svg>
  );
}
