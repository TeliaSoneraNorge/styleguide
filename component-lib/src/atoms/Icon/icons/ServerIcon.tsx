//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: server.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function ServerIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--server', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M46 6a8 8 0 0 1 8 8v36a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V14a8 8 0 0 1 8-8zm4 36H14v8a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-8zm-24 4a2 2 0 1 1 0 4h-6a2 2 0 1 1 0-4zm24-20H14v12h36V26zm-24 4a2 2 0 1 1 0 4h-6a2 2 0 1 1 0-4zm20-20H18a4 4 0 0 0-4 4v8h36v-8a4 4 0 0 0-4-4zm-20 4a2 2 0 1 1 0 4h-6a2 2 0 1 1 0-4z"
      />
    </svg>
  );
}
