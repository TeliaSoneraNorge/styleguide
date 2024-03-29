//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: pulse.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function PulseIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--pulse', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M17.252 21.029c.818-1.472 2.951-1.324 3.587.183l.058.156 4.562 13.685 2.793-5.024a2 2 0 011.582-1.022L30 29h24a2 2 0 01.15 3.995L54 33H31.176l-4.428 7.971c-.818 1.473-2.951 1.324-3.587-.183l-.058-.155-4.563-13.687-2.792 5.025a2 2 0 01-1.582 1.022L14 33h-4a2 2 0 01-.15-3.994L10 29h2.822l4.43-7.971z"
        clipRule="evenodd"
      />
    </svg>
  );
}
