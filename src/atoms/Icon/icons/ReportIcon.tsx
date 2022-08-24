//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: report.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function ReportIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--report', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M20 4a8 8 0 00-8 8v44a4 4 0 004 4h28a8 8 0 008-8V18.276a4 4 0 00-1.046-2.697L41.572 5.303A4 4 0 0038.618 4H20zm-4 8a4 4 0 014-4h17v8a4 4 0 004 4h7v32a4 4 0 01-4 4H16V12zm29.922 4L41 10.609V16h4.922z"
        clipRule="evenodd"
      />
      <path d="M24 28a2 2 0 10-4 0v20a2 2 0 002 2h20a2 2 0 100-4H24V28z" />
      <path
        fillRule="evenodd"
        d="M43.087 28.82a2 2 0 01.592 2.767l-5.5 8.5a2 2 0 01-2.996.418l-2.444-2.139-3.191 3.9a2 2 0 11-3.096-2.532l4.5-5.5a2 2 0 012.865-.24l2.26 1.978 4.244-6.559a2 2 0 012.766-.592z"
        clipRule="evenodd"
      />
    </svg>
  );
}