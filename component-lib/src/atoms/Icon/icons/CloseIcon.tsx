//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: close.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

export function CloseIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--close', props.className)}
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      <path
        fill="#222"
        fillRule="evenodd"
        d="M12.469 12.713l.117-.127a2 2 0 0 1 2.701-.117l.127.117L32 29.17l16.586-16.585a2 2 0 0 1 2.701-.117l.127.117a2 2 0 0 1 .117 2.701l-.117.127L34.83 32l16.585 16.586a2 2 0 0 1 .117 2.701l-.117.127a2 2 0 0 1-2.701.117l-.127-.117L32 34.83 15.414 51.414a2 2 0 0 1-2.701.117l-.127-.117a2 2 0 0 1-.117-2.701l.117-.127L29.17 32 12.586 15.414a2 2 0 0 1-.117-2.701l.117-.127-.117.127z"
      />
    </svg>
  );
}
