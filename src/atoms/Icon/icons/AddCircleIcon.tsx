//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: add-circle.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function AddCircleIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--add-circle', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M32 6a26 26 0 0126 26c0 14.36-11.64 26-26 26S6 46.36 6 32 17.64 6 32 6zm0 4c-12.15 0-22 9.85-22 22s9.85 22 22 22 22-9.85 22-22-9.85-22-22-22zm0 10a2 2 0 012 2v8h8a2 2 0 110 4h-8v8a2 2 0 11-4 0v-8h-8a2 2 0 110-4h8v-8a2 2 0 012-2z"
      />
    </svg>
  );
}
