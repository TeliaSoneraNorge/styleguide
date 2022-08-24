//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: pin.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function PinIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--pin', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M47.792 37.385A17.089 17.089 0 0042 27.008V14.472l2.342-4.683A4.001 4.001 0 0040.763 4H23.235a4 4 0 00-3.578 5.79L22 14.471v12.536a17.088 17.088 0 00-5.793 10.377A4.003 4.003 0 0020.166 42h9.833v14a2 2 0 004 0V42h9.834a4.003 4.003 0 003.96-4.615zM40.762 8l-1.999 4H25.235l-2-4h17.527zm-8.715 30.005c-.016 0-.03-.005-.048-.005-.017 0-.032.004-.049.005l-11.793.005a12.9 12.9 0 014.652-8.125A2.978 2.978 0 0026 27.5V16h12v11.501a2.978 2.978 0 001.19 2.384A12.854 12.854 0 0143.832 38l-11.785.005z" />
    </svg>
  );
}