//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: speedometer.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function SpeedometerIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--speedometer', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M13 55.31a2 2 0 01-1.54-.72A28 28 0 0141.59 10c.37.12.74.25 1.1.39a2 2 0 11-1.38 3.75c-.32-.12-.63-.23-1-.33A24 24 0 0014.54 52a2 2 0 01-.26 2.81 2 2 0 01-1.28.5zm40 0a2 2 0 01-1.28-.47 2 2 0 01-.26-2.84 24 24 0 001.85-28.1 2 2 0 113.38-2.14 28 28 0 01-2.15 32.83 2 2 0 01-1.54.72zM31.73 38.24a2 2 0 001.27.45 2 2 0 001.55-.69l18-22a2.013 2.013 0 10-3.1-2.57l-18 22a2 2 0 00.28 2.81z" />
    </svg>
  );
}
