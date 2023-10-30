//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: facebook.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function FacebookIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--facebook', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M36.2 60H24.73V32H19v-9.654h5.73v-5.79C24.73 8.681 27.961 4 37.153 4h7.662v9.654H40.03c-3.578 0-3.82 1.356-3.82 3.864l-.01 4.828h8.673L43.861 32h-7.65v28h-.012z"
        clipRule="evenodd"
      />
    </svg>
  );
}
