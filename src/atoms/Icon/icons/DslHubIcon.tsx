//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: dsl-hub.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function DslHubIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--dsl-hub', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M48 8H16a8.01 8.01 0 00-8 8v32a8.01 8.01 0 008 8h32a8.01 8.01 0 008-8V16a8.01 8.01 0 00-8-8zm4 40a4.004 4.004 0 01-4 4H16a4.004 4.004 0 01-4-4V16a4.004 4.004 0 014-4h32a4.004 4.004 0 014 4v32zm-8-32H20a4.004 4.004 0 00-4 4v16a4.004 4.004 0 004 4h2v4a4.004 4.004 0 004 4h12a4.004 4.004 0 004-4v-4h2a4.004 4.004 0 004-4V20a4.004 4.004 0 00-4-4zm0 20h-2a4.004 4.004 0 00-4 4v4H26v-4a4.004 4.004 0 00-4-4h-2V20h6v4a2 2 0 004 0v-4h4v4a2 2 0 004 0v-4h6v16z" />
    </svg>
  );
}
