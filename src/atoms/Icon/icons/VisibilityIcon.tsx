//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: visibility.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function VisibilityIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--visibility', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M32 12c15.464 0 28 14 28 20S47.464 52 32 52 4 38 4 32s12.536-20 28-20zm0 4c-6.046 0-12.167 2.57-17.228 6.815-2.16 1.811-3.978 3.823-5.229 5.725C8.511 30.111 8 31.423 8 32s.511 1.889 1.543 3.46c1.25 1.902 3.069 3.914 5.229 5.725C19.832 45.431 25.954 48 32 48c6.046 0 12.167-2.57 17.228-6.815 2.16-1.811 3.978-3.823 5.229-5.725C55.489 33.889 56 32.577 56 32s-.511-1.889-1.543-3.46c-1.25-1.902-3.069-3.914-5.229-5.725C44.168 18.569 38.046 16 32 16zm0 6c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm0 4a6 6 0 100 12 6 6 0 000-12z"
      />
    </svg>
  );
}
