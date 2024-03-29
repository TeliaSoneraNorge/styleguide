//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: reverse.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function ReverseIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--reverse', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M37.785 10.624a2 2 0 00-2.903 2.752l3.823 4.032-20.713.01c-7.728.005-13.99 6.27-13.992 13.999v1.008a2 2 0 104 0v-1.008c0-5.52 4.474-9.995 9.994-9.998l21.498-.011-4.585 4.348a2 2 0 102.752 2.902l7.62-7.225a2 2 0 00.074-2.827l-7.568-7.982zm17.979 21.272c.005 5.525-4.47 10.007-9.994 10.01l-19.5.01 4.589-4.352a2 2 0 10-2.752-2.902l-7.62 7.225a2 2 0 00-.074 2.827l7.569 7.982a2 2 0 002.902-2.752l-3.82-4.029 18.708-.01c7.734-.003 13.999-6.279 13.992-14.013l-.001-.994a2 2 0 00-4 .003v.995z" />
    </svg>
  );
}
