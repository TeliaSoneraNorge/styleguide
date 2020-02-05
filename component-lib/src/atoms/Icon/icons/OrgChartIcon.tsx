//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: org-chart.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

export function OrgChartIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--org-chart', props.className)}
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      <path
        fillRule="evenodd"
        d="M32 8c5.523 0 10 4.477 10 10 0 4.838-3.435 8.873-7.999 9.8L34 33h13a4 4 0 0 1 3.995 3.8L51 37l.001 5.29a7 7 0 1 1-4.001 0V37H34l.001 5.29a7 7 0 1 1-4.001 0V37H17l.001 5.29a7 7 0 1 1-4.001 0V37a4 4 0 0 1 3.8-3.995L17 33h13v-5.2c-4.564-.927-8-4.962-8-9.8 0-5.523 4.477-10 10-10zM15 46a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm17 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm17 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM32 12a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"
      />
    </svg>
  );
}
