//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: voice-switch.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function VoiceSwitchIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--voice-switch', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M24.037 6.007C26.287 5.972 28 7.808 28 9.949v9.703a4 4 0 01-4 4h-4a2 2 0 00-2 2v12.867a2 2 0 002 2h4a4 4 0 014 4v9.73c0 1.995-1.502 3.784-3.636 3.91-1.549.09-3.927.142-6.374-.154-2.392-.288-5.128-.939-7.176-2.448C5.284 51.482 4 46.677 4 44.014V20.186c0-2.426 1.115-4.948 2.63-7.043 1.533-2.121 3.645-4.042 5.978-5.205 1.711-.853 3.939-1.305 5.942-1.563 2.05-.263 4.072-.346 5.487-.368zM24 10.008c-1.326.023-3.14.104-4.94.335-1.893.243-3.575.63-4.668 1.175-1.667.83-3.305 2.286-4.521 3.969C8.635 17.197 8 18.907 8 20.187v23.827c0 1.44.717 5.03 5.186 8.323 1.208.89 3.11 1.435 5.284 1.697 2.056.248 4.11.217 5.53.139v-9.654h-4a6 6 0 01-6-6V25.652a6 6 0 016-6h4v-9.644z"
        clipRule="evenodd"
      />
      <path d="M37.95 32.136a2 2 0 002.828-2.828L36.47 25H48a2 2 0 000-4H37.193l3.585-3.585a2 2 0 00-2.828-2.829l-7.269 7.269a2.009 2.009 0 00-.68 1.558 1.994 1.994 0 00.678 1.453l7.27 7.27zM58 41.349a1.994 1.994 0 00-.68-1.493l-7.27-7.27a2 2 0 10-2.828 2.828L50.808 39H40a2 2 0 000 4h11.53l-4.308 4.308a2 2 0 002.828 2.828l7.27-7.27A2 2 0 0058 41.35z" />
    </svg>
  );
}