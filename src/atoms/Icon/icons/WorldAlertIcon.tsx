//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: world-alert.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function WorldAlertIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--world-alert', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M36.497 26.338c1.925-3.117 5.08-3.117 7.009 0l11.863 23.7C57.006 53.316 55.346 56 51.684 56H28.318c-3.666 0-5.326-2.684-3.684-5.962zM32 6a26 26 0 0126 26c0 3.66-.756 7.144-2.122 10.304l-2.516-5.024A22.05 22.05 0 0054 32a21.761 21.761 0 00-2-9.17l-2 2V30c0 .157-.018.31-.052.457l-3.707-7.401a2 2 0 01.349-.466l3.33-3.33A22.07 22.07 0 0038 10.84V16a2 2 0 01-.59 1.41L34 20.83V22h.289l-1.844 3.687a4.002 4.002 0 01-2.44-3.487L30 22v-1.17A4 4 0 0131.17 18L34 15.17v-5.08c-.66-.09-1.33-.09-2-.09a21.84 21.84 0 00-10 2.41v9.95a4 4 0 01-3.22 3.96L10.38 28l-.1.566A21.53 21.53 0 0010 32c0 7.74 3.997 14.547 10.04 18.468l-1.169 2.335a9.114 9.114 0 00-.54 1.318C10.93 49.538 6 41.345 6 32 6 17.64 17.64 6 32 6zm8.959 21.852c-.727-1.136-1.191-1.136-1.914-.002L27.349 51.262C26.683 52.596 26.932 53 28.423 53H51.58c1.487 0 1.738-.406 1.073-1.74zM40.5 48a1.5 1.5 0 110 3 1.5 1.5 0 110-3zM27.282 36l-2.003 4H22v2h2.278l-2.002 4H22a4 4 0 01-3.995-3.8L18 42v-2a4 4 0 014-4h5.282zM40.5 35c.83 0 1.5.754 1.5 1.685v7.63c0 .931-.67 1.685-1.5 1.685s-1.5-.754-1.5-1.685v-7.63c0-.931.67-1.685 1.5-1.685zM18 15a22.19 22.19 0 00-6.34 8.59L18 22.32z"
      />
    </svg>
  );
}
