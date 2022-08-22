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
        d="M58.606 55.543L47.773 44.71a2.153 2.153 0 00-.658-.446c8.248-9.776 7.325-24.316-2.094-32.97-9.419-8.655-23.985-8.347-33.03.698-9.044 9.044-9.352 23.61-.698 33.03 8.654 9.419 23.195 10.342 32.97 2.093.107.245.258.469.446.658l10.833 10.834a2.166 2.166 0 103.064-3.064zm-29.698-7.135c-10.77 0-19.5-8.73-19.5-19.5s8.73-19.5 19.5-19.5 19.5 8.73 19.5 19.5c-.013 10.765-8.736 19.488-19.5 19.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
