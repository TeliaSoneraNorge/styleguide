//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: network.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function NetworkIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--network', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M53.95 39.964a5.95 5.95 0 00-3.159.909l-6.35-5.08c2.254-4.03 1.977-9-.711-12.754l4.17-4.17a8.02 8.02 0 10-2.825-2.826l-4.17 4.17a11.92 11.92 0 00-14.726.668l-10.57-8.809a6.014 6.014 0 10-2.56 3.07l10.572 8.809a11.774 11.774 0 00-1.434 8.182l-3.611 1.313a7.984 7.984 0 101.369 3.755l3.61-1.313a12.037 12.037 0 006.503 5.406l-1.127 6.759a5.99 5.99 0 103.942.655l1.124-6.747a11.925 11.925 0 007.94-3.054l6.357 5.085a5.99 5.99 0 105.656-4.028zm-41.958 1.998a3.996 3.996 0 110-7.992 3.996 3.996 0 010 7.992zm39.96-33.966a3.996 3.996 0 110 7.992 3.996 3.996 0 010-7.992zM9.994 11.992a1.998 1.998 0 110-3.996 1.998 1.998 0 010 3.996zm19.98 43.956a1.998 1.998 0 110-3.996 1.998 1.998 0 010 3.996zm3.996-17.982a7.992 7.992 0 117.992-7.992 8.001 8.001 0 01-7.992 7.992zm19.98 9.99a1.998 1.998 0 110-3.996 1.998 1.998 0 010 3.996z"
        clipRule="evenodd"
      />
    </svg>
  );
}