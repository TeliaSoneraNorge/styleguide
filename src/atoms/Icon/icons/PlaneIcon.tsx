//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: plane.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function PlaneIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--plane', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M57.234 30.849l-7.428-4.727a13.913 13.913 0 00-7.481-2.178h-1.666l-10.8-10.877a2.071 2.071 0 00-.117-.109A3.983 3.983 0 0027.15 12h-2.886a3.98 3.98 0 00-3.927 4.636l1.218 7.308H16.94l-4.778-6.372a4.003 4.003 0 00-3.184-1.59H7.98A3.985 3.985 0 004 19.961v11.475a5.94 5.94 0 003.3 5.34l4.7 2.35a25.78 25.78 0 005.682 2.05l-3.1 4.34a3.98 3.98 0 003.239 6.295h5.402a4.009 4.009 0 002.444-.838l11.72-9.115h16.64a5.972 5.972 0 003.207-11.01zM24.265 15.98h2.877l7.907 7.963h-9.457l-1.327-7.963zm-1.042 31.85h-5.402l7.11-9.953 11.107-.016-.018.016h-.17v.133l-12.627 9.82zm32.716-11.388a1.923 1.923 0 01-1.911 1.435H40.004a4.05 4.05 0 00-.219-1.293 3.932 3.932 0 00-3.765-2.688H24.93a3.987 3.987 0 00-3.24 1.668l-1.459 2.043a21.778 21.778 0 01-6.45-2.041l-4.7-2.35a1.98 1.98 0 01-1.1-1.78V19.962h.996l4.778 6.372a4.003 4.003 0 003.184 1.59h25.386a9.94 9.94 0 015.343 1.557l7.428 4.727a1.923 1.923 0 01.843 2.235z"
        clipRule="evenodd"
      />
    </svg>
  );
}
