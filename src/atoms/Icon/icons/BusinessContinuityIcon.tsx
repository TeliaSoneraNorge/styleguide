//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: business-continuity.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function BusinessContinuityIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--business-continuity', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M36 27.014a2 2 0 00-2 2v6h-6a2 2 0 00-2 2v4h-6a2 2 0 00-2 2v10h-1a2 2 0 100 4h30a2 2 0 000-4h-1v-24a2 2 0 00-2-2h-8zm-6 26h4v-14h-4v14zm-8 0h4v-8h-4v8zm20 0h-4v-22h4v22zm11.9-4.251a2 2 0 01-.781-2.718 22.919 22.919 0 002.75-8.84 22.958 22.958 0 00-.53-7.72 2 2 0 013.887-.944 26.96 26.96 0 01.622 9.061 26.92 26.92 0 01-3.23 10.38 2 2 0 01-2.718.781z"
        clipRule="evenodd"
      />
      <path d="M9 33c0-12.703 10.297-23 23-23 7.47 0 14.11 3.56 18.313 9.082H43.5a2 2 0 000 4h10.076a3 3 0 002.99-2.74l.926-10.655a2 2 0 00-3.984-.347l-.575 6.605C47.983 9.878 40.446 6 32 6 17.088 6 5 18.088 5 33c0 4.92 1.318 9.54 3.622 13.516a2 2 0 103.461-2.005A22.886 22.886 0 019 33z" />
    </svg>
  );
}
