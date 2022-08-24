//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: compass.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function CompassIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--compass', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M32 6a26 26 0 1026 26A26.029 26.029 0 0032 6zm2 47.905V50a2 2 0 00-4 0v3.905A22.033 22.033 0 0110.095 34H14a2 2 0 100-4h-3.905A22.033 22.033 0 0130 10.095V14a2 2 0 004 0v-3.905A22.033 22.033 0 0153.905 30H50a2 2 0 000 4h3.905A22.033 22.033 0 0134 53.905zm6.924-36.029l-13.28 5.312a8.045 8.045 0 00-4.456 4.457l-5.311 13.279a3.999 3.999 0 005.2 5.2l13.278-5.313a8.045 8.045 0 004.457-4.456l5.311-13.279a4 4 0 00-5.2-5.2h.001zm-3.825 16.993a4.021 4.021 0 01-2.23 2.229l-13.284 5.329.005-.017 5.31-13.28a4.02 4.02 0 012.23-2.228l13.278-5.312-5.309 13.279zM29 32a3 3 0 116 0 3 3 0 01-6 0z" />
    </svg>
  );
}