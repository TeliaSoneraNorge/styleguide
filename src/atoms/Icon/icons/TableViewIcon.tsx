//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: table-view.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function TableViewIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--table-view', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M56 53.474c0 .099-.005.196-.013.292.008.077.013.155.013.234 0 1.105-.877 2-1.958 2H10.958C9.877 56 9 55.105 9 54c0-.08.005-.157.013-.234A3.22 3.22 0 019 53.474V10.526C9 9.131 9.895 8 11 8c.152 0 .3.021.442.062.152-.04.31-.062.475-.062h42.166C55.142 8 56 8.895 56 10c0 .08-.005.158-.013.235.008.096.013.193.013.291v42.948zM13 16v16h17V16H13zm39 20H34v16h18V36zm0-4H34V16h18v16zm-39 4h17v16H13V36z"
        clipRule="evenodd"
      />
    </svg>
  );
}
