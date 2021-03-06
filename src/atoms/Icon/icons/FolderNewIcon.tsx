//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: folder-new.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function FolderNewIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--folder-new', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M48 32a2 2 0 012 2v8h8a2 2 0 110 4h-8v8a2 2 0 11-4 0v-8h-8a2 2 0 110-4h8v-8a2 2 0 012-2zm8-8a4 4 0 00-3.8-3.995L52 20H32v-2a2 2 0 00-2-2H10a2 2 0 00-1.995 1.85L8 18v28a4 4 0 003.8 3.995L12 50h34-10a2 2 0 110 4h-2l-.046-.002L12 54a8 8 0 01-7.996-7.75L4 46V18a6 6 0 015.775-5.996L10 12h20a6 6 0 015.574 3.77l.086.23H52a8 8 0 017.996 7.75L60 24v8a2 2 0 11-4 0v-8zm-8 2a2 2 0 110 4H16a2 2 0 110-4h32z"
      />
    </svg>
  );
}
