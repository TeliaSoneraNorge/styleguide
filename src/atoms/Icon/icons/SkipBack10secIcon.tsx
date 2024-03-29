//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: skip-back10sec.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function SkipBack10secIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--skip-back10sec', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M24.309 40.751V29.377l-2.887 1.32a.98.98 0 01-.391.099c-.408 0-.8-.294-1.174-.88a1.95 1.95 0 01-.367-.906c0-.456.383-.864 1.15-1.223l5.038-2.275c.34-.146.707-.221 1.077-.22.636 0 .954.293.954.88v13.87a3.31 3.31 0 01-.538 1.834 1.476 1.476 0 01-1.174.832c-.408 0-.832-.318-1.273-.954a2.058 2.058 0 01-.415-1.003zm7.45-1.8a11.194 11.194 0 01-.745-4.303v-1.297c0-3.388 1.082-5.91 2.956-7.183a5.767 5.767 0 013.293-.937 5.69 5.69 0 015.524 3.82 11.64 11.64 0 01.722 4.3v1.297c0 3.389-1.058 5.91-2.932 7.16a5.97 5.97 0 01-8.817-2.858zm2.524-4.494c0 3.484.984 5.213 2.98 5.213 1.993 0 2.977-1.73 2.977-5.213v-.914c0-3.484-.984-5.213-2.977-5.213-1.996 0-2.98 1.729-2.98 5.213v.914zM30 10H18.828l2.586-2.586a2 2 0 10-2.828-2.828l-6 6a1.984 1.984 0 00-.375.539c-.076.15-.133.31-.169.475l-.004.012a2.006 2.006 0 00-.014.638c.02.175.062.348.127.512l.001.004.009.014a1.977 1.977 0 00.348.539c.027.031.047.066.077.095l6 6a2 2 0 002.828-2.828L18.828 14H30c12.542 0 22 8.598 22 20a20 20 0 11-40 0 2 2 0 00-4 0 24 24 0 0048 0c0-13.683-11.178-24-26-24z" />
    </svg>
  );
}
