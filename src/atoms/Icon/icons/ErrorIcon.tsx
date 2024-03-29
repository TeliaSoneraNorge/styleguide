//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: error.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function ErrorIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--error', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M38.858 11.547l19.404 32.337A8 8 0 0151.402 56H12.596a8 8 0 01-6.86-12.116L25.14 11.546a7.998 7.998 0 0113.718.001zM51.402 52a3.955 3.955 0 003.48-2.029 3.953 3.953 0 00-.05-4.028L35.43 13.605a3.998 3.998 0 00-6.86-.001L9.166 45.943A4 4 0 0012.596 52h38.806zM30 36.978v-11.82c0-.538.107-1.07.316-1.565.171-.443.438-.843.782-1.172.242-.25.57-.4.917-.42.502 0 1.003.38 1.504 1.14.272.337.44.745.481 1.174v11.82c0 .441-.306.862-.918 1.264-.582.391-1.267.6-1.968.6-.742 0-1.113-.34-1.114-1.021zm4.242 6.946a2.825 2.825 0 00-.572-1.354c-.561-.823-1.103-1.234-1.625-1.234a1.587 1.587 0 00-1.068.482 3.63 3.63 0 00-.872 1.309 4.444 4.444 0 00-.347 1.73c0 .762.421 1.143 1.264 1.143.781 0 1.545-.23 2.196-.662.683-.442 1.024-.913 1.024-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}
