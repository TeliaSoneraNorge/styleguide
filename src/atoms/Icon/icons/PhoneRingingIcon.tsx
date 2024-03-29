//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: phone-ringing.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function PhoneRingingIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--phone-ringing', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M40.827 40a4.002 4.002 0 00-5.657 0L32 43.172 20.827 32l3.172-3.172a4.004 4.004 0 000-5.656L16.827 16a4.002 4.002 0 00-5.657 0l-1.272 1.273a18.019 18.019 0 000 25.454L21.271 54.1a18.02 18.02 0 0025.455 0L48 52.828a4.004 4.004 0 000-5.656L40.827 40zm3.071 11.273a14.015 14.015 0 01-19.799 0L12.726 39.9a14.017 14.017 0 010-19.8L14 18.829 21.17 26 18 29.172a4.004 4.004 0 000 5.656L29.17 46a4.002 4.002 0 005.656 0l3.172-3.172L45.17 50l-1.272 1.273zM57.998 30a2 2 0 01-4 0 20.022 20.022 0 00-20-20 2 2 0 010-4 24.027 24.027 0 0124 24zm-8 0a2 2 0 01-4 0 12.013 12.013 0 00-12-12 2 2 0 010-4 16.018 16.018 0 0116 16zm-16-4a2 2 0 010-4 8.01 8.01 0 018 8 2 2 0 01-4 0 4.005 4.005 0 00-4-4z" />
    </svg>
  );
}
