//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: search.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function SearchIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--search', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M55.41 54.59L45.19 44.36c7.134-8.645 6.222-21.369-2.073-28.907-8.294-7.539-21.047-7.235-28.973.691-7.926 7.926-8.23 20.679-.691 28.973 7.538 8.295 20.262 9.207 28.907 2.073l10.23 10.22a2 2 0 002.82-2.82zM12 31c0-9.389 7.611-17 17-17s17 7.611 17 17-7.611 17-17 17-17-7.611-17-17z"
      />
    </svg>
  );
}
