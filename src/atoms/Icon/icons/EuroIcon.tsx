//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: euro.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function EuroIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--euro', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M28.207 39.889c2.206 5.013 5.909 7.518 11.104 7.518 1.516 0 3.631-.402 6.345-1.207 1.655-.493 2.873-.74 3.655-.74 1.609 0 2.413.716 2.413 2.148a8.018 8.018 0 01-.862 3.66c-.575 1.14-1.344 2.002-2.31 2.584-1.103.625-2.552 1.14-4.345 1.542A25.317 25.317 0 0138.62 56c-5.102 0-9.482-1.421-13.138-4.263-3.655-2.842-6.218-6.791-7.689-11.848h-2.689c-.322 0-.655-.121-1-.368-.346-.246-.793-.683-1.346-1.309-.505-.627-.758-1.254-.758-1.879 0-.673.482-1.31 1.449-1.914.964-.604 1.975-.906 3.033-.906h.414c-.045-.269-.07-.917-.07-1.947 0-1.164.025-1.901.07-2.215h-.827c-.322 0-.656-.123-1-.37-.345-.244-.793-.681-1.345-1.308-.506-.625-.76-1.252-.76-1.88 0-.67.485-1.308 1.45-1.912.966-.605 1.977-.906 3.035-.906h.964c1.794-4.923 4.61-8.816 8.45-11.68C30.702 8.433 35.01 7 39.792 7c4.047 0 7.77 1.051 11.171 3.153.692.448 1.036 1.052 1.036 1.813a7.286 7.286 0 01-.656 3.054c-.435.962-.964 1.724-1.586 2.282-.62.56-1.251.839-1.896.839-.369 0-.804-.134-1.31-.402-2.574-1.432-4.92-2.148-7.034-2.148-4.92 0-8.622 2.461-11.105 7.384h16.691c1.15 0 1.723.515 1.723 1.544 0 1.164-.334 2.258-1 3.288-.667 1.03-1.367 1.544-2.103 1.544H26.551c-.044.314-.069 1.051-.069 2.215 0 1.03.025 1.678.07 1.947h16.137c1.151 0 1.724.514 1.724 1.544 0 1.163-.333 2.26-1 3.29-.666 1.03-1.366 1.542-2.102 1.542H28.207z"
        clipRule="evenodd"
      />
    </svg>
  );
}
