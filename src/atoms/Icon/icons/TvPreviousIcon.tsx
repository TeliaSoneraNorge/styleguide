//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: tv-previous.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function TvPreviousIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--tv-previous', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M58 7.376v49.407a3.22 3.22 0 01-.489 1.704l-.177.255a3.219 3.219 0 01-4.257.769L16 36.35V58a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2h6a2 2 0 012 2v21.647l37.077-23.16a3.226 3.226 0 013.012-.212A3.351 3.351 0 0158 7.376z"
        clipRule="evenodd"
      />
    </svg>
  );
}
