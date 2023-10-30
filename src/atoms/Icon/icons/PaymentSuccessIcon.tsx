//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: payment-success.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function PaymentSuccessIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--payment-success', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M56 30.836V16a8.01 8.01 0 00-8-8H12a8.01 8.01 0 00-8 8v20a8.01 8.01 0 008 8h18.302A14.997 14.997 0 1056 30.836zM12 12h36a4.004 4.004 0 014 4v2H8v-2a4.004 4.004 0 014-4zM8 36V22h44v5.743A14.97 14.97 0 0030.05 40H12a4.004 4.004 0 01-4-4zm37 16c-6.075 0-11-4.925-11-11s4.925-11 11-11 11 4.925 11 11c-.007 6.072-4.928 10.993-11 11zm6.664-13.89l-6 8.999a1.998 1.998 0 01-3.078.305l-4-4a2 2 0 112.828-2.828l2.275 2.274 4.647-6.97a2 2 0 113.328 2.22z"
        clipRule="evenodd"
      />
    </svg>
  );
}
