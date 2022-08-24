//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: secured2.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function Secured2Icon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--secured2', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M47.167 31.56c0 1.197-.97 2.167-2.167 2.167H34.167V44.56a2.167 2.167 0 01-4.334 0V33.726H19a2.167 2.167 0 110-4.333h10.833V18.56a2.167 2.167 0 114.334 0v10.833H45c1.197 0 2.167.97 2.167 2.167zM58 16.393v10.834c0 24.5-20.264 31.092-24.326 32.165a6.546 6.546 0 01-3.35 0C26.264 58.32 6 51.727 6 27.226V16.394a4.337 4.337 0 014.26-4.332 34.375 34.375 0 0019.12-7.166 4.28 4.28 0 015.24 0 34.376 34.376 0 0019.12 7.166A4.337 4.337 0 0158 16.393zm-4.333 0l-.123-.003A38.692 38.692 0 0131.97 8.323a38.322 38.322 0 01-21.513 8.067 2.39 2.39 0 01-.122.003h-.003l.003 10.833c0 20.789 16.15 26.669 21.1 27.977.37.099.76.099 1.131 0 4.953-1.308 21.102-7.188 21.102-27.977V16.393z"
        clipRule="evenodd"
      />
    </svg>
  );
}