//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: slow-wifi.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function SlowWifiIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--slow-wifi', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M53 28a2 2 0 11-4 0 2 2 0 014 0zm7-.128A9 9 0 0151 37h-2.172L46 39.828V41a8 8 0 01-16 0h-8a8 8 0 11-16 0 2 2 0 110-4h.05c.01-.05.03-.096.044-.144.002-.053-.008-.104-.004-.157C7.07 24.33 15.63 15 26 15c6.803 0 12.81 4.03 16.426 10.284A9.016 9.016 0 0151.001 19l.127.001A9.06 9.06 0 0160 27.872zm-23.864-4.356a1.995 1.995 0 01-.153.281l-3.608 5.273L37.133 37h4.781a21.646 21.646 0 00-5.778-13.484zM26 19c-2.518.01-4.983.727-7.114 2.067.073.073.14.152.201.236L23.047 27h5.899l3.736-5.46c.124-.179.277-.334.452-.462A13.474 13.474 0 0026 19zM10.08 37h4.787l4.752-7.92-3.817-5.494-.002-.003A21.715 21.715 0 0010.08 37zM18 41h-8a4 4 0 108 0zm14.467-4l-3.6-6h-5.734l-3.6 6h12.934zM42 41h-8a4 4 0 108 0zm14-13.071A5.094 5.094 0 0051.07 23l-.07-.001a5.02 5.02 0 00-4.882 3.906 3.943 3.943 0 01-1.79 2.481 27.582 27.582 0 011.322 5.133l.349-.348A3.973 3.973 0 0148.828 33H51a4.999 4.999 0 004.999-5.071z"
        clipRule="evenodd"
      />
    </svg>
  );
}
