//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: power-grid.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function PowerGridIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--power-grid', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M52 32h-8.964l-.04-.21c.081-.057.158-.12.23-.188L50.828 24A3.975 3.975 0 0052 21.172V20a4.005 4.005 0 00-4-4h-8.04l-1.685-8.755A4.004 4.004 0 0034.348 4h-4.696a4.004 4.004 0 00-3.927 3.244L24.04 16H16a4.004 4.004 0 00-4 4v1.172A3.973 3.973 0 0013.172 24l7.825 7.825-.034.175H12a4.004 4.004 0 00-4 4v1.172A3.973 3.973 0 009.172 40l8 8H16a4.004 4.004 0 00-4 4v4a4.004 4.004 0 004 4h32a4.004 4.004 0 004-4v-4a4.005 4.005 0 00-4-4h-1.172l8-8A3.975 3.975 0 0056 37.172V36a4.005 4.005 0 00-4-4zm-4-12v1.172l-5.91 5.91L40.73 20H48zM29.652 8h4.696l1.538 8h-7.772l1.538-8zm-2.308 12h9.31l2.309 12H25.036l2.308-12zm-3.077 16h15.466l2.308 12H21.959l2.308-12zM16 21.172V20h7.271l-1.362 7.081L16 21.172zm-4 16V36h8.194l-1.51 7.855L12 37.172zM48 52v4H16l-.003-4H48zm4-14.828l-6.683 6.683L43.806 36H52v1.172z" />
    </svg>
  );
}