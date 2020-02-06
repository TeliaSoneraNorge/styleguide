//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: list-view.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function ListViewIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--list-view', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M11 43a3 3 0 0 1 3 3l-.005.176A3 3 0 1 1 11 43zm42.965 1l.152.005c1.053.077 1.883.942 1.883 1.996C56 47.105 55.087 48 53.962 48H20.035c-1.124 0-2.034-.894-2.035-1.999 0-1.105.91-2.001 2.035-2.001h33.93zM11 29a3 3 0 0 1 3 3l-.005.176A3 3 0 1 1 11 29zm42.963 1c1.12 0 2.037.895 2.037 2 0 1.104-.912 2-2.037 2H20.037C18.912 34 18 33.104 18 32s.912-2 2.037-2zM11 15c1.657 0 3 1.347 3 3a3 3 0 1 1-3.01-3zm9.032 1l.152.005H54.11c1.008.072 1.81.86 1.884 1.85.081 1.102-.762 2.06-1.884 2.14H20.184a2.097 2.097 0 0 1-.295 0c-1.122-.08-1.965-1.038-1.884-2.14.082-1.102 1.058-1.93 2.179-1.85z"
      />
    </svg>
  );
}
