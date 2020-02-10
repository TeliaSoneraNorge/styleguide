//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: internet.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function InternetIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--internet', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M58 32C58 17.68 46.42 6.055 32.1 6h-.2C17.54 6.028 5.922 17.69 5.95 32.05 5.978 46.41 17.64 58.028 32 58a26 26 0 0 0 26-26zm-6.36 9.89a45.32 45.32 0 0 0-8.19-2.64c.365-2.4.549-4.823.55-7.25a48.21 48.21 0 0 0-.55-7.24 46.49 46.49 0 0 0 8.2-2.64 21.92 21.92 0 0 1 0 19.77h-.01zM32 53.7c-2.91-1.89-5.29-6-6.67-11.24a48.59 48.59 0 0 1 13.34 0c-1.38 5.22-3.76 9.35-6.67 11.24zM32 38a54.35 54.35 0 0 0-7.49.53 42.06 42.06 0 0 1 0-13.06A54.35 54.35 0 0 0 32 26a54.2 54.2 0 0 0 7.48-.53A41.93 41.93 0 0 1 40 32c0 2.187-.17 4.37-.51 6.53A54.35 54.35 0 0 0 32 38zm0-27.7c2.91 1.89 5.29 6 6.67 11.24A48.68 48.68 0 0 1 32 22a50.36 50.36 0 0 1-6.67-.46c1.38-5.22 3.76-9.35 6.67-11.24zm17.5 8.39a42 42 0 0 1-6.85 2.14 29.19 29.19 0 0 0-4.42-9.93 22 22 0 0 1 11.27 7.79zM25.77 10.9a29.39 29.39 0 0 0-4.42 9.93 42 42 0 0 1-6.85-2.14 22.06 22.06 0 0 1 11.27-7.79zM12.36 22.11a44.54 44.54 0 0 0 8.19 2.64 48.06 48.06 0 0 0 0 14.5 45.32 45.32 0 0 0-8.19 2.64 21.9 21.9 0 0 1 0-19.78zm2.14 23.2a42 42 0 0 1 6.85-2.14 29.39 29.39 0 0 0 4.42 9.93 22.06 22.06 0 0 1-11.27-7.79zm23.73 7.79a29.39 29.39 0 0 0 4.42-9.93 42 42 0 0 1 6.85 2.14 22.06 22.06 0 0 1-11.27 7.79z"
      />
    </svg>
  );
}
