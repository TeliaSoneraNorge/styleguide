//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: info.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function InfoIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--info', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28C59.982 16.543 47.456 4.018 32 4zm0 51.693C18.915 55.693 8.307 45.085 8.307 32S18.915 8.308 32 8.308c13.084 0 23.692 10.607 23.692 23.692C55.677 45.08 45.078 55.678 32 55.693zm2.153-29.053v17.034a4.307 4.307 0 01-.34 1.684 3.48 3.48 0 01-.842 1.263c-.26.27-.613.431-.988.453-.54 0-1.08-.41-1.62-1.23a2.372 2.372 0 01-.517-1.263V27.547c0-.475.33-.928.988-1.36a3.8 3.8 0 012.12-.647c.799 0 1.199.367 1.2 1.1zm.26-8.485a4.786 4.786 0 01-.372 1.863 3.912 3.912 0 01-.94 1.41 1.71 1.71 0 01-1.15.519c-.562 0-1.145-.443-1.75-1.33a3.043 3.043 0 01-.616-1.458c0-.539.368-1.046 1.103-1.522a4.277 4.277 0 012.365-.714c.907 0 1.36.41 1.36 1.232z"
        clipRule="evenodd"
      />
    </svg>
  );
}
