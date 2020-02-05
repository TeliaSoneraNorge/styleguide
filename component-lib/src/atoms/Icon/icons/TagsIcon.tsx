//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: tags.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

export function TagsIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--tags', props.className)}
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      <path
        fillRule="evenodd"
        d="M54.625 34.54a3.948 3.948 0 0 0-.496-.611l-23.077-23.07C29.546 9.355 26.569 8.07 24.434 8H11.758A3.617 3.617 0 0 0 8 11.555v12.876c.072 2.135 1.356 5.112 2.862 6.618L33.94 54.128c.186.186.39.354.602.496 2.534 1.976 6.21 1.825 8.531-.496l11.056-11.065c2.265-2.248 2.462-5.786.655-8.309l-.16-.214zM12.002 11.998h12.35c1.134.06 3.098.916 3.871 1.69l23.066 23.06.09.135.091.117c.766.982.693 2.378-.16 3.224L40.244 51.3c-.858.858-2.262.932-3.241.169l-.117-.092-.117-.078L13.692 28.22c-.731-.73-1.535-2.523-1.673-3.675l-.017-.196V11.998zM20.996 24A2.996 2.996 0 0 1 18 21.004 3.005 3.005 0 0 1 21.004 18 2.996 2.996 0 0 1 24 20.996 2.995 2.995 0 0 1 20.996 24z"
      />
    </svg>
  );
}
