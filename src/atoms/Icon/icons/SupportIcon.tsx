//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: support.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function SupportIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--support', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 65"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M45.613 30.958c4.401-7.15 2.546-16.484-4.254-21.408-6.8-4.924-16.247-3.774-21.667 2.639-5.42 6.412-4.98 15.918 1.01 21.803 5.988 5.885 15.5 6.158 21.817.627 7.517.282 13.47 6.452 13.481 13.974v2a4.004 4.004 0 01-4 4H12a4.004 4.004 0 01-4-4v-2a14.057 14.057 0 014.76-10.52 26.11 26.11 0 0015.653 8.26 3.988 3.988 0 10.29-4A22.089 22.089 0 0114.13 33.43l-.003-.005A21.846 21.846 0 0110 20.593a2 2 0 00-4 0 25.804 25.804 0 004.315 14.315A18.067 18.067 0 004 48.593v2a8.01 8.01 0 008 8h40a8.01 8.01 0 008-8v-2a18.03 18.03 0 00-14.387-17.635zM32 34.593c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12c-.007 6.625-5.376 11.993-12 12z"
        clipRule="evenodd"
      />
    </svg>
  );
}
