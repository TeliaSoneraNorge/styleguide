//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: megaphone.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function MegaphoneIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--megaphone', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M38.372 10.275a2.99 2.99 0 00-3.115.227l-9.291 6.636A9.944 9.944 0 0120.154 19H12a8.01 8.01 0 00-8 8v4a8.014 8.014 0 006.398 7.839l2.927 11.708a5.88 5.88 0 0011.41-2.854l-2.094-8.376a9.96 9.96 0 013.326 1.546l9.288 6.634A3 3 0 0040 45.057V12.943a2.987 2.987 0 00-1.628-2.668zm-17.86 40.001a1.88 1.88 0 01-3.306-.7L14.562 39h3.876l2.416 9.664a1.867 1.867 0 01-.342 1.612zM36 43.113l-7.708-5.504A13.916 13.916 0 0020.154 35H12a4.004 4.004 0 01-4-4v-4a4.004 4.004 0 014-4h8.154a13.917 13.917 0 008.137-2.607L36 14.887v28.227zM52 29a20.636 20.636 0 01-4.48 13.3 2 2 0 01-3.04-2.6A16.604 16.604 0 0048 29a16.604 16.604 0 00-3.52-10.7 2 2 0 013.04-2.6A20.636 20.636 0 0152 29zm8 0c0 7.455-2.362 14.49-6.48 19.3a2 2 0 01-3.04-2.6C53.989 41.601 56 35.515 56 29c0-6.515-2.012-12.601-5.52-16.7a2 2 0 013.04-2.6C57.638 14.51 60 21.544 60 29z"
        clipRule="evenodd"
      />
    </svg>
  );
}
