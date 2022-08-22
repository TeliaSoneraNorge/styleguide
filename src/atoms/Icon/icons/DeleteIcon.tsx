//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: delete.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function DeleteIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--delete', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M52.63 22.667v29.037A8.306 8.306 0 0144.333 60H19.444a8.306 8.306 0 01-8.296-8.296V22.667a2.074 2.074 0 114.148 0v29.037a4.153 4.153 0 004.148 4.148h24.89a4.153 4.153 0 004.147-4.148V22.667a2.074 2.074 0 114.149 0zm4.148-8.297a2.074 2.074 0 01-2.074 2.074H9.074a2.074 2.074 0 110-4.148h10.37V8.148A4.153 4.153 0 0123.593 4h16.592a4.153 4.153 0 014.148 4.148v4.148h10.37c1.146 0 2.075.929 2.075 2.074zm-33.185-2.074h16.592V8.148H23.593v4.148zm4.148 35.26V26.815a2.074 2.074 0 10-4.148 0v20.74a2.074 2.074 0 004.148 0zm12.444 0V26.815a2.074 2.074 0 10-4.148 0v20.74a2.074 2.074 0 004.148 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
