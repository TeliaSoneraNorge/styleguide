//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: remote-control.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function RemoteControlIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--remote-control', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M17.998 40a2 2 0 114 0 2 2 0 01-4 0zm-2 2a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4zm-4 4a2 2 0 100 4 2 2 0 000-4zm18-14a6 6 0 11-6-6 6.006 6.006 0 016 6zm-4 0A2 2 0 1030 32a2 2 0 004 0zm10-28a2 2 0 000 4 12.013 12.013 0 0112 12 2 2 0 004 0 16.018 16.018 0 00-16-16zm0 8a2 2 0 000 4 4.005 4.005 0 014 4 2 2 0 004 0 8.01 8.01 0 00-8-8zm1.672 12.844a8.008 8.008 0 010 11.312L25.412 56.414A12.607 12.607 0 017.584 38.586l20.258-20.258a8.008 8.008 0 0111.313 0l6.515 6.516zm-2.828 2.828l-6.516-6.516a4.006 4.006 0 00-5.656 0L10.412 41.414a8.607 8.607 0 0012.172 12.172l20.258-20.258a4.004 4.004 0 000-5.656z" />
    </svg>
  );
}