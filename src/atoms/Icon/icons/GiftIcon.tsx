//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: gift.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function GiftIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--gift', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M56 16h-8.06c.04-.332.06-.666.06-1a9 9 0 00-16-5.64A9 9 0 0016 15c0 .334.02.668.06 1H8a3.84 3.84 0 00-4 3.67v6.66A3.84 3.84 0 008 30v18a8 8 0 008 8h32a8 8 0 008-8V30a3.84 3.84 0 004-3.67v-6.66A3.84 3.84 0 0056 16zm-17-6a5 5 0 015 5 4.79 4.79 0 01-.11 1h-9.78a4.79 4.79 0 01-.11-1 5 5 0 015-5zm-19 5a5 5 0 0110 0 4.79 4.79 0 01-.11 1h-9.78a4.79 4.79 0 01-.11-1zm10 5v6H8v-6h22zM12 48V30h18v22H16a4 4 0 01-4-4zm40 0a4 4 0 01-4 4H34V30h18v18zm0-22H34v-6h22v6h-4z"
      />
    </svg>
  );
}
