//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: arrow-small-up.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function ArrowSmallUpIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--arrow-small-up', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M33.386 18.714L47.728 39.55c.502.73.289 1.71-.477 2.19-.27.169-.586.259-.91.259H17.658C16.743 42 16 41.292 16 40.419c0-.309.095-.61.272-.868l14.341-20.837c.503-.73 1.531-.934 2.297-.455"
      />
    </svg>
  );
}
