//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: broadband.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function BroadbandIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--broadband', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M33.833 32.423v23.834a2.167 2.167 0 11-4.333 0V32.422a2.167 2.167 0 114.333 0zm7.661-20.66a2.166 2.166 0 10-3.064 3.064 6.501 6.501 0 010 9.192 2.166 2.166 0 103.064 3.064c4.23-4.23 4.23-11.09 0-15.32zm6.128-6.129A2.167 2.167 0 1044.558 8.7a15.165 15.165 0 010 21.448 2.167 2.167 0 003.064 3.065 19.5 19.5 0 000-27.578zm-15.955 10.54a3.25 3.25 0 100 6.499 3.25 3.25 0 000-6.5zm-6.764-4.412a2.167 2.167 0 00-3.064 0c-4.23 4.231-4.23 11.09 0 15.321a2.167 2.167 0 103.064-3.064 6.502 6.502 0 010-9.192 2.166 2.166 0 000-3.065zm-10.57 7.661A15.063 15.063 0 0118.776 8.7a2.167 2.167 0 00-3.064-3.064 19.5 19.5 0 000 27.577 2.167 2.167 0 003.064-3.065 15.063 15.063 0 01-4.443-10.724z"
        clipRule="evenodd"
      />
    </svg>
  );
}
