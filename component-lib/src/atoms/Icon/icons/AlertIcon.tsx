//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: alert.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

export function AlertIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--alert', props.className)}
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      <path
        fill="#222"
        fill-rule="evenodd"
        d="M53.133 45.803L36.82 13.215c-2.653-4.287-6.99-4.287-9.636 0L10.87 45.803C8.614 50.31 10.896 54 15.938 54h32.128c5.035 0 7.317-3.69 5.067-8.197zM33.33 15.18l16.224 32.41c.922 1.847.575 2.41-1.488 2.41H15.938c-2.068 0-2.415-.56-1.49-2.406l16.226-32.416c1.004-1.57 1.648-1.571 2.656.002zM32 25c1.105 0 2 1.096 2 2.451V38.55c0 1.354-.895 2.45-2 2.45s-2-1.096-2-2.451V27.45c0-1.355.895-2.451 2-2.451zm2 20a1.999 1.999 0 1 1-4 0 1.999 1.999 0 1 1 4 0z"
      />
    </svg>
  );
}
