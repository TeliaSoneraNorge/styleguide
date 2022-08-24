//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: parental-guide.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function ParentalGuideIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--parental-guide', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M56.745 39.273a16.597 16.597 0 00-12.667-16.096 13.473 13.473 0 10-24.41 0A16.597 16.597 0 007 39.273v4.145a8.3 8.3 0 008.29 8.291h8.292v2.073A6.225 6.225 0 0029.8 60h20.727a6.225 6.225 0 006.218-6.218v-2.073a8.228 8.228 0 00-1.152-4.195 8.026 8.026 0 001.152-4.096v-4.145zM31.873 8.183a9.327 9.327 0 11-9.328 9.326 9.337 9.337 0 019.327-9.327zM15.29 47.562a4.15 4.15 0 01-4.146-4.145v-4.145a12.451 12.451 0 0111.097-12.361 13.43 13.43 0 0019.261 0A12.451 12.451 0 0152.6 39.272v4.146c-.007.347-.063.69-.166 1.022a8.226 8.226 0 00-3.014-.96 9.327 9.327 0 10-18.513 0 8.297 8.297 0 00-6.204 4.084h-9.412zm30.054-5.181a5.182 5.182 0 11-10.363 0 5.182 5.182 0 0110.363 0zm7.255 11.4a2.075 2.075 0 01-2.073 2.073H29.8a2.075 2.075 0 01-2.073-2.073v-2.073a4.15 4.15 0 014.145-4.145h.541a9.318 9.318 0 0015.5 0h.541a4.15 4.15 0 014.146 4.145v2.073z"
        clipRule="evenodd"
      />
    </svg>
  );
}