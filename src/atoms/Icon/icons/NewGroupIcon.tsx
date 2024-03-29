//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: new-group.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function NewGroupIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--new-group', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M14.693 26.25C13.023 24.156 12 21.538 12 18.5 12 12.17 17.257 6 24 6c6.069 0 10.745 3.702 12.241 8.32 6.811.044 12.319 5.579 12.319 12.4 0 6.848-5.552 12.4-12.4 12.4a12.36 12.36 0 01-4.979-1.04h-2.514c-2.185 0-4.825.9-6.902 2.523-2.059 1.608-3.365 3.755-3.365 6.192v2.965a2 2 0 002 2h14.72a2 2 0 010 4H20.4a6 6 0 01-6-6v-2.32H10a6 6 0 01-6-6v-2.965c0-3.992 2.16-7.202 4.902-9.344a16.4 16.4 0 015.79-2.88zM16 18.5c0-4.409 3.743-8.5 8-8.5 4.11 0 7.064 2.301 8.212 4.962-4.913 1.648-8.452 6.29-8.452 11.758 0 2.851.962 5.478 2.58 7.573-2.465.44-4.973 1.544-7.038 3.158-1.924 1.503-3.562 3.533-4.367 5.989H10a2 2 0 01-2-2v-2.965c0-2.437 1.307-4.584 3.365-6.192 2.077-1.623 4.717-2.523 6.902-2.523h.626a2 2 0 001.9-1.375 2 2 0 00-.684-2.55C17.58 24.15 16 21.64 16 18.5zm20.16-.18a8.4 8.4 0 100 16.8 8.4 8.4 0 000-16.8z"
        clipRule="evenodd"
      />
      <path d="M47.68 53.76a2 2 0 004 0v-6.32H58a2 2 0 100-4h-6.32v-6.32a2 2 0 10-4 0v6.32h-6.32a2 2 0 100 4h6.32v6.32z" />
    </svg>
  );
}
