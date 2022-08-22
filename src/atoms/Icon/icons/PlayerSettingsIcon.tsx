//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: player-settings.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function PlayerSettingsIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--player-settings', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M52 12H12a8.01 8.01 0 00-8 8v20a8.01 8.01 0 008 8h4v5.586a2.999 2.999 0 005.121 2.121L28.828 48H52a8.01 8.01 0 008-8V20a8.01 8.01 0 00-8-8zm4 28a4.005 4.005 0 01-4 4H27.172L20 51.172V44h-8a4.004 4.004 0 01-4-4V20a4.004 4.004 0 014-4h40a4.005 4.005 0 014 4v20zm-4-10a2 2 0 01-2 2H14a2 2 0 010-4h36a2 2 0 012 2zm-10 8a2 2 0 01-2 2H14a2 2 0 010-4h26a2 2 0 012 2z" />
    </svg>
  );
}
