//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: open.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function OpenIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--open', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M28 8a2 2 0 1 1 0 4H15.63A3.63 3.63 0 0 0 12 15.66v32.75A3.64 3.64 0 0 0 15.63 52H48.3a3.64 3.64 0 0 0 3.63-3.63V36a2 2 0 1 1 4 0v12.41A7.64 7.64 0 0 1 48.3 56H15.63A7.64 7.64 0 0 1 8 48.41V15.66A7.63 7.63 0 0 1 15.63 8H28zm28.28-4a3.65 3.65 0 0 1 3.64 3.63v14.8a2 2 0 1 1-4 0V10.69L34.79 31.83a2 2 0 0 1-1.42.58 2 2 0 0 1-1.37-.58A2 2 0 0 1 32 29L53 8H41.48a2 2 0 1 1 0-4h14.8z"
      />
    </svg>
  );
}
