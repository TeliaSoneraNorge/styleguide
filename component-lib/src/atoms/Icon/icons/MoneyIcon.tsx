//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: money.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function MoneyIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--money', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M21.11 14.05A21 21 0 0 1 60 25a21.001 21.001 0 0 1-10 17.89 21 21 0 0 1-7 7A21.09 21.09 0 0 1 25 60a21 21 0 0 1-10.99-38.95 21 21 0 0 1 7-7zM11.21 29A17 17 0 0 0 25 56a17.06 17.06 0 0 0 9.91-3.21A21.67 21.67 0 0 1 32 53c-11.598 0-21-9.402-21-21a22.29 22.29 0 0 1 .21-3zm7.03-7A17 17 0 0 0 32 49a16.9 16.9 0 0 0 10-3.24A20.84 20.84 0 0 1 18.24 22zM39 8c-9.389 0-17 7.611-17 17s7.611 17 17 17a17 17 0 0 0 17-17c0-9.389-7.611-17-17-17zm-1.28 9.88c.54 0 .8.24.8.72 0 .74-.32 1.56-.86 2.04l-4.18 3.86 5.14 5.06c.12.12.18.28.18.5 0 1.04-.62 2.06-1.26 2.06-.26 0-.56-.16-.86-.5l-5.54-5.6v3.92c0 1.1-.7 2.18-1.4 2.18s-1.38-1.22-1.38-1.6V19.18c0-.64 1.02-1.3 2-1.3.52 0 .78.24.78.72v4.46l4.86-4.5c.46-.42 1.1-.68 1.72-.68zm7.72.12c1.84 0 3.32.86 4.08 2.22.38.68.56 1.44.56 2.3 0 1.5-.88 2.92-2.38 3.8l2.42 3.3c.1.16.16.32.16.5 0 .98-.66 2-1.28 2-.3 0-.58-.2-.88-.6l-3.16-4.5h-1.78v2.92c0 1.1-.7 2.18-1.4 2.18s-1.38-1.26-1.38-1.6V19.3c0-.64 1.02-1.3 2-1.3zm-.08 2.6h-2.18v3.86h2.18c1.12 0 2.02-.86 2.02-1.92 0-1.12-.84-1.94-2.02-1.94z"
      />
    </svg>
  );
}
