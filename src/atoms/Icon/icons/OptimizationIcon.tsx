//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: optimization.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function OptimizationIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--optimization', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M34.828 29.172a3.999 3.999 0 11-5.655 5.655 3.999 3.999 0 015.655-5.655zM48 32a16 16 0 11-16-16 16.018 16.018 0 0116 16zm-4 0a12 12 0 10-12 12 12.014 12.014 0 0012-12zm14 0A26 26 0 1132 6a26.03 26.03 0 0126 26zm-4 0a22 22 0 10-22 22 22.025 22.025 0 0022-22z" />
    </svg>
  );
}
