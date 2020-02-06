//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: world-question.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function WorldQuestionIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--world-question', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M41 26c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM32 6a26 26 0 0 1 25.994 25.45 20.113 20.113 0 0 0-4.777-5.286 21.59 21.59 0 0 0-.976-2.791L52 22.83l-1.542 1.543a19.872 19.872 0 0 0-4.011-1.622l.024-.032.119-.129 3.33-3.33a22.07 22.07 0 0 0-11.47-8.287L38 10.84V16a2 2 0 0 1-.47 1.28l-.12.13L34 20.83V22h4.56c.253 0 .501.024.743.07-3 .253-5.81 1.167-8.285 2.595a3.977 3.977 0 0 1-1.011-2.43L30 22v-1.17a4 4 0 0 1 1.014-2.665L31.17 18 34 15.17v-5.08c-.66-.09-1.33-.09-2-.09a21.84 21.84 0 0 0-9.533 2.178L22 12.41v9.95a4 4 0 0 1-3.02 3.915l-.2.045-8.4 1.68a21.53 21.53 0 0 0-.38 4c0 9.315 5.79 17.279 13.967 20.487a20.1 20.1 0 0 0 4.765 5.31C15.915 56.189 6 45.253 6 32 6 17.64 17.64 6 32 6zm9 23c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zm.58 17.18c.58 0 .88.26.88.8 0 .82-.38 1.66-.86 2.1-.24.22-.48.34-.74.34-.78 0-1.52-1.3-1.52-1.8 0-.7 1.14-1.44 2.24-1.44zM41.52 35c1.58 0 2.84.68 3.5 1.76.34.54.5 1.16.5 1.82 0 1.082-.383 1.972-1.492 3.278l-.203.235-.405.447-2.06 2.2c-.26.26-.48.38-.7.38-.34 0-.66-.24-.96-.7-.2-.34-.3-.6-.3-.76 0-.128.051-.256.143-.394l.077-.106 1.94-2.06c.9-.98 1.28-1.64 1.28-2.34 0-.8-.66-1.4-1.56-1.4-.728 0-1.282.314-2.052 1.136l-.168.184-.105.113c-.167.178-.292.3-.375.367-.12.08-.24.12-.36.12-.64 0-1.22-1.08-1.22-1.42 0-.14.06-.32.2-.52.96-1.44 2.62-2.34 4.32-2.34zM18 15a22.19 22.19 0 0 0-6.147 8.137l-.193.453L18 22.32V15z"
      />
    </svg>
  );
}
