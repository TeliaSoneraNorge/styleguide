//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: settings.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function SettingsIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--settings', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M36 4a4 4 0 0 1 4 4v3.5a21.59 21.59 0 0 1 5.78 3.34l3.05-1.77a4 4 0 0 1 5.48 1.48c.69 1.26 1.75 3.05 2.69 4.66l1.26 2.26a4 4 0 0 1-1.47 5.46l-3 1.76a21.2 21.2 0 0 1 0 6.62l3 1.76a4 4 0 0 1 1.86 2.44 3.94 3.94 0 0 1-.41 3.04c-.78 1.3-1.83 3.15-2.78 4.81l-1.21 2.11a4 4 0 0 1-5.46 1.46l-3.06-1.77A21.87 21.87 0 0 1 40 52.5V56a4 4 0 0 1-1.18 2.84A4 4 0 0 1 36 60h-8a4 4 0 0 1-4-4v-3.5a21.83 21.83 0 0 1-5.77-3.33l-3 1.76a4 4 0 0 1-5.48-1.48C9 48.16 8 46.32 7 44.68l-1.21-2.15a4 4 0 0 1 1.47-5.46l3-1.75A22.15 22.15 0 0 1 10 32a21.91 21.91 0 0 1 .26-3.31l-3.05-1.76a4 4 0 0 1-1.45-5.48l2.65-4.58 1.34-2.34a4 4 0 0 1 5.46-1.46l3.06 1.77A21.59 21.59 0 0 1 24 11.5V8a4 4 0 0 1 1.16-2.84A3.82 3.82 0 0 1 28 4zm0 4h-8v6.38l-1.4.44a17.72 17.72 0 0 0-6.75 3.92l-1.08 1-5.56-3.2-1.34 2.32c-.92 1.61-1.93 3.37-2.66 4.61l5.54 3.19-.31 1.44a17.55 17.55 0 0 0 0 7.81l.31 1.43-5.53 3.2 1.23 2.12a751.25 751.25 0 0 1 2.375 4.108l.395.692 5.55-3.21 1.08 1a17.72 17.72 0 0 0 6.75 3.92l1.4.44V56h8.01v-6.38l1.4-.44a17.72 17.72 0 0 0 6.75-3.92l1.08-1 5.56 3.2 1.2-2.1c1-1.66 2-3.53 2.79-4.85l-.018.03-5.522-3.19.31-1.43a17.59 17.59 0 0 0 0-7.82l-.31-1.43 5.53-3.2-1.3-2.24-2.7-4.69-5.55 3.21-1.08-1a17.72 17.72 0 0 0-6.75-3.92l-1.4-.44V8zm-4 14a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zm0 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"
      />
    </svg>
  );
}
