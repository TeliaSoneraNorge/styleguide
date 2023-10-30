//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: warning.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function WarningIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--warning', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M27.257 39.192c.064 1.344.768 1.984 2.112 1.984 2.752 0 5.44-1.792 5.504-3.584l1.024-25.216c0-1.728-.896-2.56-2.752-2.56-3.52 0-7.168 2.368-7.168 4.608l1.28 24.768zm3.648 16.192c-2.496 0-4.864-4.16-4.864-5.76 0-2.24 3.648-4.608 7.168-4.608 1.856 0 2.816.832 2.816 2.56 0 2.624-1.216 5.312-2.752 6.72-.768.704-1.536 1.088-2.368 1.088z"
        clipRule="evenodd"
      />
    </svg>
  );
}
