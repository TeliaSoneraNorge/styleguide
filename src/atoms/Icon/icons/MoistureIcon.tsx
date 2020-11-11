//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: moisture.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function MoistureIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--moisture', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M22 36a10 10 0 01-10-10c0-4.8 7-15.12 8.35-17.14L22 6.48l1.65 2.38C25 10.88 32 21.2 32 26a10 10 0 01-10 10zm0-22.38c-2.88 4.49-6 10.2-6 12.38a6 6 0 0012 0c0-2.18-3.12-7.89-6-12.38zM30 60a8 8 0 01-8-8c0-3.75 5.29-11.6 6.35-13.14L30 36.48l1.65 2.38C32.71 40.4 38 48.25 38 52a8 8 0 01-8 8zm0-16.36c-2.13 3.41-4 7-4 8.36a4 4 0 008 0c0-1.33-1.87-4.95-4-8.36zM44 40a8 8 0 01-8-8c0-3.75 5.29-11.6 6.35-13.14L44 16.48l1.65 2.38C46.71 20.4 52 28.25 52 32a8 8 0 01-8 8zm0-16.36c-2.13 3.41-4 7-4 8.36a4 4 0 008 0c0-1.33-1.87-4.95-4-8.36z" />
    </svg>
  );
}
