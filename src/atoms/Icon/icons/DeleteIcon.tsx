//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: delete.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function DeleteIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--delete', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 48 54"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M42 16a2 2 0 00-2 2v28a4 4 0 01-4 4H12a4 4 0 01-4-4V18a2 2 0 00-4 0v28a8 8 0 008 8h24a8 8 0 008-8V18a2 2 0 00-2-2zm4-8H36V4a4 4 0 00-4-4H16a4 4 0 00-4 4v4H2a2 2 0 000 4h44a2 2 0 000-4zM16 4h16v4H16z" />
      <path d="M20 42V22a2 2 0 00-4 0v20a2 2 0 004 0zm12 0V22a2 2 0 00-4 0v20a2 2 0 004 0z" />
    </svg>
  );
}