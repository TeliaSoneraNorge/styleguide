//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: money-krone.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function MoneyKroneIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--money-krone', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M37.54 32.12c-.26 0-.56-.16-.86-.5l-5.54-5.6v3.92c0 1.1-.7 2.18-1.4 2.18s-1.38-1.22-1.38-1.6V19.18c0-.64 1.02-1.3 2-1.3.52 0 .78.24.78.72v4.46l4.86-4.5c.46-.42 1.1-.68 1.72-.68.54 0 .8.24.8.72 0 .74-.32 1.56-.86 2.04l-4.18 3.86 5.14 5.06c.12.12.18.28.18.5 0 1.04-.62 2.06-1.26 2.06z" />
      <path
        fillRule="evenodd"
        d="M49 32.12c-.3 0-.58-.2-.88-.6l-3.16-4.5h-1.78v2.92c0 1.1-.7 2.18-1.4 2.18s-1.38-1.26-1.38-1.6V19.3c0-.64 1.02-1.3 2-1.3h3.04c1.84 0 3.32.86 4.08 2.22.38.68.56 1.44.56 2.3 0 1.5-.88 2.92-2.38 3.8l2.42 3.3c.1.16.16.32.16.5 0 .98-.66 2-1.28 2zM43.18 20.6h2.18c1.18 0 2.02.82 2.02 1.94 0 1.06-.9 1.92-2.02 1.92h-2.18V20.6z"
        clipRule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M60 25a21 21 0 00-38.89-10.95h-.1a21 21 0 00-7 7A21 21 0 0025 60a21.09 21.09 0 0018-10.11 21 21 0 007-7A21 21 0 0060 25zM25 56a17 17 0 01-13.79-27 22.301 22.301 0 00-.21 3c0 11.598 9.402 21 21 21a21.676 21.676 0 002.91-.21A17.06 17.06 0 0125 56zm-8.159-16.28A17 17 0 0032.001 49a16.9 16.9 0 0010-3.24A20.84 20.84 0 0118.24 22a17 17 0 00-1.4 17.72zM39.001 42c-9.39 0-17-7.611-17-17S29.61 8 39 8c9.388 0 17 7.611 17 17a17 17 0 01-17 17z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
