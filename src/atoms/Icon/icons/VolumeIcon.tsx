//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: volume.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function VolumeIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--volume', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M29.17 12A4 4 0 0136 14.83v34.34a4 4 0 01-2.47 3.7 4.12 4.12 0 01-1.53.3A4 4 0 0129.17 52l-10-10H16a8 8 0 01-8-8v-4a8 8 0 018-8h3.17zm17.7.674a2 2 0 012.65.026C53.64 17.51 56 24.54 56 32c0 7.46-2.36 14.49-6.52 19.3a2 2 0 01-3-2.6C50 44.6 52 38.52 52 32s-2-12.6-5.48-16.7a2 2 0 01.35-2.626zM32 14.83L20.83 26H16a4 4 0 00-4 4v4a4 4 0 004 4h4.83L32 49.17V14.83zm8.87 3.844a2 2 0 012.65.026A20.6 20.6 0 0148 32a20.6 20.6 0 01-4.52 13.3 2 2 0 01-3-2.6A16.58 16.58 0 0044 32a16.58 16.58 0 00-3.48-10.7 2 2 0 01.35-2.626z"
      />
    </svg>
  );
}
