//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: refill-card.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function RefillCardIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--refill-card', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M49.657 16.828L39.172 6.344A7.95 7.95 0 0033.515 4H20a8.01 8.01 0 00-8 8v40a8.01 8.01 0 008 8h24a8.009 8.009 0 008-8V22.485a7.953 7.953 0 00-2.343-5.657zM48 52a4.004 4.004 0 01-4 4H20a4.004 4.004 0 01-4-4V12a4.004 4.004 0 014-4h13.515a3.972 3.972 0 012.828 1.172l10.485 10.484A3.975 3.975 0 0148 22.486V52zm-4-14a12 12 0 11-12-12h1.172l-2.586-2.586a2 2 0 012.828-2.828l6 6a1.999 1.999 0 010 2.828l-6 6a2 2 0 01-2.828-2.828L33.172 30H32a8 8 0 108 8 2 2 0 014 0z" />
    </svg>
  );
}
