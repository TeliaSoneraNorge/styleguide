//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: esim-simcard.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function EsimSimcardIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--esim-simcard', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M46 6H18a8.01 8.01 0 00-8 8v36a8.01 8.01 0 008 8h28a8.01 8.01 0 008-8V14a8.01 8.01 0 00-8-8zm4 44a4.005 4.005 0 01-4 4h-4v-2a2 2 0 00-4 0v2h-4v-2a2 2 0 00-4 0v2h-4v-2a2 2 0 00-4 0v2h-4a4.005 4.005 0 01-4-4V14a4.005 4.005 0 014-4h4v2a2 2 0 004 0v-2h4v2a2 2 0 004 0v-2h4v2a2 2 0 004 0v-2h4a4.005 4.005 0 014 4v36zm-8-32H28.028a3.972 3.972 0 00-2.828 1.172L19.172 25.2A3.972 3.972 0 0018 28.028V42a4.005 4.005 0 004 4h20a4.005 4.005 0 004-4V22a4.005 4.005 0 00-4-4zm0 24H22V28.028L28.028 22H42v20z" />
    </svg>
  );
}