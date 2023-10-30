//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: key.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function KeyIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--key', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M44 14a6 6 0 106 6 6.007 6.007 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4zM54.205 9.92a19.997 19.997 0 00-33.661 18.71L5.172 44A3.974 3.974 0 004 46.829V56a4.004 4.004 0 004 4h6a4.004 4.004 0 004-4v-2h1a5.006 5.006 0 005-5v-1h2a4.004 4.004 0 004-4v-2h1.308A19.993 19.993 0 0054.205 9.92zm1.72 15.64a15.983 15.983 0 01-23.06 12.75 2.988 2.988 0 00-1.314-.31H26v6h-6v5a1 1 0 01-1 1h-5v6H8v-9.172l15.78-15.78a3.005 3.005 0 00.768-2.9 15.999 15.999 0 1131.378-2.587h-.001z" />
    </svg>
  );
}
