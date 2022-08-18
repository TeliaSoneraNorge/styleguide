//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: menu.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function MenuIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--menu', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M10.333 16.833c0-1.196.97-2.166 2.167-2.166h39a2.167 2.167 0 110 4.333h-39a2.167 2.167 0 01-2.167-2.167zM51.5 45h-39a2.167 2.167 0 100 4.333h39a2.167 2.167 0 100-4.333zm0-15.167h-39a2.167 2.167 0 000 4.334h39a2.167 2.167 0 000-4.334z"
        clipRule="evenodd"
      />
    </svg>
  );
}
