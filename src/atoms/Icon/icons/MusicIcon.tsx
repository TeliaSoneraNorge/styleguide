//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: music.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function MusicIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--music', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M28 6a8 8 0 00-8 8v27.52A9 9 0 1024 49V22h30v19.52A9 9 0 1058 49V6H28zM15 54a5 5 0 110-10 5 5 0 010 10zm34 0a5 5 0 110-10 5 5 0 010 10zM24 18v-4a4 4 0 014-4h26v8H24z"
      />
    </svg>
  );
}
