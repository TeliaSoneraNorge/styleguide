//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: cart.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function CartIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--cart', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M49.438 42a5.99 5.99 0 005.821-4.544l4.622-18.486A4 4 0 0056 14H17.24l-.957-4.784A4.01 4.01 0 0012.36 6H6a2 2 0 100 4h6.361l7.295 36.478A5.999 5.999 0 1027.65 54h14.7a6 6 0 100-4h-14.7a6.019 6.019 0 00-3.961-3.755L22.839 42h26.6zM56 18l-4.622 18.486A1.996 1.996 0 0149.438 38H22.04l-4-20H56zM22 54a2 2 0 01-.003-4l.001.001h.003a2 2 0 110 4zm26-4a2 2 0 110 4 2 2 0 010-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}