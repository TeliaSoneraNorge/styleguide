//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: airplay.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function AirplayIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--airplay', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M60 20v24a8.01 8.01 0 01-8 8h-4a2 2 0 010-4h4a4.005 4.005 0 004-4V20a4.005 4.005 0 00-4-4H12a4.004 4.004 0 00-4 4v24a4.004 4.004 0 004 4h4a2 2 0 010 4h-4a8.01 8.01 0 01-8-8V20a8.01 8.01 0 018-8h40a8.01 8.01 0 018 8zM41.784 49.88A4 4 0 0138.392 56H25.608a4 4 0 01-3.392-6.12l6.391-10.226a4 4 0 016.786 0l6.391 10.227zM38.392 52L32 41.773 25.608 52h12.784z" />
    </svg>
  );
}
