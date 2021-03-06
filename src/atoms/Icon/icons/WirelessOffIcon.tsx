//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: wireless-off.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function WirelessOffIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--wireless-off', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M48.586 12.586a2 2 0 012.828 2.828l-36 36a2 2 0 01-2.828-2.828zM32 45a3 3 0 110 6 3 3 0 010-6zm4.377-10.307a11.032 11.032 0 014.004 2.6 2.14 2.14 0 010 3.015 2.102 2.102 0 01-1.489.618 2.102 2.102 0 01-1.457-.629 6.851 6.851 0 00-4.63-2.032zm7.61-7.61c1.153.664 2.25 1.43 3.279 2.292.667.56.908 1.47.604 2.279A2.095 2.095 0 0145.903 33c-.5 0-.983-.175-1.362-.494a18.635 18.635 0 00-3.589-2.387zM32.404 24c.174 0 .348.002.522.005l-4.493 4.492a18.665 18.665 0 00-8.167 4.009c-.879.58-2.06.425-2.753-.361a2.032 2.032 0 01.028-2.729A23.093 23.093 0 0132.403 24zm19.758-5.09c.682.44 1.352.904 2.009 1.393a2.023 2.023 0 01.391 2.89c-.713.904-2.045 1.074-2.975.38a32.382 32.382 0 00-2.438-1.65zm-42.33 1.393c9.487-7.062 21.655-9.002 32.616-5.82l-3.392 3.39c-9.094-1.982-18.885-.082-26.641 5.7-.93.694-2.262.524-2.975-.38a2.023 2.023 0 01.391-2.89z"
      />
    </svg>
  );
}
