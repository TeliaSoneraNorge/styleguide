//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: usb.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function UsbIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--usb', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M59.416 30.586l-6-6a2 2 0 00-2.828 2.828L53.174 30H24.83l6.843-6.843a7.004 7.004 0 10-2.828-2.829L19.174 30h-1.467a7 7 0 100 4h7.467l8.977 8.977A3.955 3.955 0 0034 44v6a4.004 4.004 0 004 4h6a4.004 4.004 0 004-4v-6a4.004 4.004 0 00-4-4h-6c-.345.005-.69.055-1.022.15L30.829 34h22.345l-2.586 2.586a2 2 0 002.828 2.828l6-6a2 2 0 000-2.828zM35.002 14a3 3 0 110 6.001 3 3 0 010-6.001zm9 30v6h-6v-6h6zm-33-9a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  );
}
