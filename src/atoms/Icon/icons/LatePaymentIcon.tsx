//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: late-payment.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function LatePaymentIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--late-payment', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M8.667 4.726a6 6 0 00-6 6v18a6 6 0 006 6h16a2 2 0 000-4h-16a2 2 0 01-2-2V18.282H43.11v3.444a2 2 0 004 0v-11a6 6 0 00-6-6H8.667zm34.444 9.556v-3.556a2 2 0 00-2-2H8.667a2 2 0 00-2 2v3.556H43.11z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M43.167 30.726c-6.352 0-11.5 5.149-11.5 11.5s5.148 11.5 11.5 11.5c6.35 0 11.5-5.149 11.5-11.5s-5.15-11.5-11.5-11.5zm-15.5 11.5c0-8.56 6.94-15.5 15.5-15.5 8.56 0 15.5 6.94 15.5 15.5 0 8.56-6.94 15.5-15.5 15.5-8.56 0-15.5-6.94-15.5-15.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M43.167 34.44a2 2 0 012 2v7.175a2 2 0 01-.471 1.29l-2.893 3.431a2 2 0 11-3.058-2.578l2.422-2.873V36.44a2 2 0 012-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}
