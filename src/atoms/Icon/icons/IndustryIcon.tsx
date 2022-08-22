//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: industry.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function IndustryIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--industry', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M54 4a4 4 0 014 4v46a4 4 0 01-4 4H8a4 4 0 01-4-4V32.872a4 4 0 011.278-2.931l10-9.286A4 4 0 0122 23.586v3.827l7.278-6.758a4 4 0 012.49-1.062l.232-.007a4 4 0 014 4v3.827l7.278-6.758a4 4 0 012.49-1.062l.232-.007V8a4 4 0 014-4h4zm0 4h-4v15.586c0 2.667-4 2.667-4 0l-10.64 9.88C34.082 34.654 32 33.746 32 32v-8.414l-10.64 9.88C20.082 34.654 18 33.746 18 32v-8.414L8 32.872V54h46V8zM20 45a2 2 0 110 4 2 2 0 010-4zm8 0a2 2 0 110 4 2 2 0 010-4zm8 0a2 2 0 110 4 2 2 0 010-4zm8 0a2 2 0 110 4 2 2 0 010-4zm-24-8a2 2 0 110 4 2 2 0 010-4zm8 0a2 2 0 110 4 2 2 0 010-4zm8 0a2 2 0 110 4 2 2 0 010-4zm8 0a2 2 0 110 4 2 2 0 010-4z" />
    </svg>
  );
}
