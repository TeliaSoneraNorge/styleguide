//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: police.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function PoliceIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--police', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M48.43 7.59l5 5a2 2 0 010 2.85c-2.27 2.18-1.7 5.54-.59 10.84A42.42 42.42 0 0154 35c0 8.56-8.08 19.11-21.59 22a1.84 1.84 0 01-.41 0 1.84 1.84 0 01-.41 0C18.08 54.11 10 43.56 10 35a42.42 42.42 0 011.2-8.72c1.11-5.3 1.68-8.66-.59-10.84a2 2 0 010-2.85l5-5a2 2 0 012.35-.36 13.21 13.21 0 0013.13 0 2 2 0 011.86 0 13.21 13.21 0 0013.13 0 2 2 0 012.35.36zM32 11.23a16.89 16.89 0 01-14.59.19l-2.72 2.71c2.38 3.67 1.39 8.39.43 13A39.37 39.37 0 0014 35c0 6.73 6.87 15.43 18 18 11.13-2.52 18-11.22 18-18a39.37 39.37 0 00-1.12-7.9l-.157-.724c-.939-4.35-1.715-8.77.587-12.276l-2.72-2.71A16.89 16.89 0 0132 11.23zm-.04 6.992a2 2 0 011.79 1.108l2.72 5.5 6.06.88a2 2 0 011.11 3.41l-4.35 4.28 1 6a2 2 0 01-2 2.34l.07.04a2.1 2.1 0 01-.94-.23L32 38.7l-5.42 2.85a2 2 0 01-2.11-.15 2 2 0 01-.8-2l1-6-4.39-4.28a2 2 0 011.11-3.41l6.06-.88 2.72-5.5a2 2 0 011.79-1.108zM32 24.74l-1.38 2.8a2 2 0 01-1.51 1.1l-3.1.45 2.24 2.18a2 2 0 01.58 1.73l-.53 3.08 2.77-1.45c.29-.14.609-.206.93-.19a1.91 1.91 0 01.93.23l2.77 1.45-.53-3.12a2 2 0 01.58-1.77L38 29.09l-3.1-.45a2 2 0 01-1.51-1.1L32 24.74z"
      />
    </svg>
  );
}
