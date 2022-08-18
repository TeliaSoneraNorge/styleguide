//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: satellite.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function SatelliteIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--satellite', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M14.308 25.371a1.996 1.996 0 001.88-.184 1.996 1.996 0 00.296-3.078l-4.234-4.234 7.06-7.06 4.233 4.244a2.002 2.002 0 102.825-2.836l-5.65-5.642a1.997 1.997 0 00-2.816 0l-9.885 9.886a1.997 1.997 0 000 2.816l5.641 5.652c.186.187.407.335.65.436zM44.73 56c.372.376.878.588 1.407.59a1.997 1.997 0 001.408-.59l9.874-9.885a1.997 1.997 0 000-2.816l-5.64-5.652a1.998 1.998 0 10-2.826 2.826l4.243 4.234-7.059 7.06-4.233-4.234a1.998 1.998 0 10-2.826 2.826L44.73 56z" />
      <path
        fillRule="evenodd"
        d="M42.722 9.996L54.015 21.29a5.99 5.99 0 01-.07 8.508L31.979 51.767c-.352.366-.83.583-1.337.609a1.996 1.996 0 01-1.408-.59l-1.867-1.867a12.754 12.754 0 01-1.628 6.082 1.997 1.997 0 01-1.468.998h-.28a1.997 1.997 0 01-1.467-.589l-3.235-3.225a5.993 5.993 0 11-8.476-8.478L7.588 41.47a1.997 1.997 0 01.43-3.155 12.748 12.748 0 016.13-1.658L12.28 34.79a1.997 1.997 0 01-.589-1.408 1.998 1.998 0 01.59-1.418l21.965-21.97a5.991 5.991 0 018.476 0zM13.225 49.71a1.997 1.997 0 003.259.648l-2.826-2.826a1.999 1.999 0 00-.433 2.178zm.932-6.562a1.457 1.457 0 00-.549 0c.133-.013.267-.013.4 0h.15zm9.016 8.248A8.988 8.988 0 0012.62 40.832l2.835 2.846 7.718 7.72zm7.429-3.864l20.587-20.591a1.997 1.997 0 000-2.826L39.897 12.822a1.996 1.996 0 00-2.826 0l-20.587 20.59L30.6 47.533z"
        clipRule="evenodd"
      />
    </svg>
  );
}
