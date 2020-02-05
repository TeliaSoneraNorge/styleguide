//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: check-mark.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

export function CheckMarkIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--check-mark', props.className)}
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      <path
        fillRule="evenodd"
        d="M11.365 34.538a2 2 0 1 0-2.73 2.924l15 14a2 2 0 0 0 2.847-.119l29-32a2 2 0 1 0-2.964-2.686L24.881 47.153 11.365 34.538z"
      />
    </svg>
  );
}
