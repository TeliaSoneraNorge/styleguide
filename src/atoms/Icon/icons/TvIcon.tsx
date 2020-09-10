//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: tv.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function TvIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--tv', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M42 52a2 2 0 110 4H22a2 2 0 110-4zm10-40a8 8 0 018 8v22a8 8 0 01-8 8H12a8 8 0 01-8-8V20a8 8 0 018-8zm0 4H12a4 4 0 00-4 4v22a4 4 0 004 4h40a4 4 0 004-4V20a4 4 0 00-4-4zm-22.12 5c.75 0 1.12.33 1.12 1a3.61 3.61 0 01-.62 2.06A1.75 1.75 0 0129 25h-4v13a3.61 3.61 0 01-.62 2.06A1.75 1.75 0 0123 41c-.507 0-1.01-.36-1.51-1.08a2.33 2.33 0 01-.49-1.13V25h-4c-.507 0-1.02-.36-1.54-1.08a2.33 2.33 0 01-.49-1.13c0-.44.3-.85.91-1.22a3.62 3.62 0 012-.57zm5.78 0a.93.93 0 011 .67L41 36l4.33-13.5a2 2 0 011-1.05A3.3 3.3 0 0148 21c.65 0 1 .32 1 1 0 .419-.07.835-.21 1.23l-5.53 15.94a3.84 3.84 0 01-.79 1.31 1.38 1.38 0 01-1 .48h-.78c-.46 0-.98-.31-1.46-1a3.51 3.51 0 01-.41-.78l-5.66-15.83a1.76 1.76 0 01-.16-.61 1.49 1.49 0 01.83-1.19 3.25 3.25 0 011.83-.55z"
      />
    </svg>
  );
}
