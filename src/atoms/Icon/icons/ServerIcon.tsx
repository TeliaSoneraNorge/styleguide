//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: server.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function ServerIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--server', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M46.77 4H16.614A8.625 8.625 0 008 12.615v38.77A8.625 8.625 0 0016.615 60H46.77a8.625 8.625 0 008.616-8.615v-38.77A8.625 8.625 0 0046.769 4zm4.307 47.385a4.312 4.312 0 01-4.308 4.307H16.615a4.312 4.312 0 01-4.307-4.307v-8.616h38.769v8.616zm0-12.923h-38.77V25.538h38.77v12.924zM12.307 21.23v-8.616a4.312 4.312 0 014.308-4.307H46.77a4.312 4.312 0 014.308 4.307v8.616h-38.77zm15.078-6.462c0 1.19-.965 2.154-2.154 2.154h-6.462a2.154 2.154 0 010-4.308h6.462c1.19 0 2.154.965 2.154 2.154zM16.615 32c0-1.19.965-2.154 2.154-2.154h6.462a2.154 2.154 0 010 4.308h-6.462A2.154 2.154 0 0116.615 32zm0 17.23c0-1.189.965-2.153 2.154-2.153h6.462a2.154 2.154 0 010 4.308h-6.462a2.154 2.154 0 01-2.154-2.154z"
        clipRule="evenodd"
      />
    </svg>
  );
}
