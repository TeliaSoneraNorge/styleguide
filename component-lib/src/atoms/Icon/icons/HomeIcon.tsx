//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: home.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function HomeIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--home', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M27.76 7.35a6 6 0 0 1 8.48 0l21.83 21.82A4 4 0 0 1 55.24 36H52v18a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V36H8.76a4 4 0 0 1-2.83-6.83zm5.65 2.83a2 2 0 0 0-2.82 0L8.76 32H16v22h32V32h7.24zM40 36a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4zm0 4h-6v6h6v-6z"
      />
    </svg>
  );
}
