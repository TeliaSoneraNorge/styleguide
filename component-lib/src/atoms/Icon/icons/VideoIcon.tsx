//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: video.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function VideoIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--video', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M52 12a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H12a8 8 0 0 1-8-8V20a8 8 0 0 1 8-8zm0 4H12a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4V20a4 4 0 0 0-4-4zm-25.938 6.113a4 4 0 0 1 4.058.107l10.23 6.39a4 4 0 0 1 0 6.78l-10.23 6.39a4 4 0 0 1-4.06.11 4 4 0 0 1-2.06-3.5V25.61a4 4 0 0 1 2.062-3.497zM28 25.61v12.78L38.23 32 28 25.61z"
      />
    </svg>
  );
}
