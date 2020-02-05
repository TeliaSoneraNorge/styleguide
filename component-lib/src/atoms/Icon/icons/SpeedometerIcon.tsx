//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: speedometer.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

export function SpeedometerIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--speedometer', props.className)}
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      <path
        fillRule="evenodd"
        d="M60 32c0 7.827-3.211 14.904-8.389 19.985l-2.828-2.83A23.928 23.928 0 0 0 56 32c0-4.204-1.08-8.156-2.98-11.592l2.927-2.927A27.87 27.87 0 0 1 60 32zM32 4a27.87 27.87 0 0 1 14.519 4.053l-2.927 2.927A23.892 23.892 0 0 0 32 8C18.745 8 8 18.745 8 32a23.928 23.928 0 0 0 7.217 17.156l-2.83 2.828C7.212 46.903 4 39.826 4 32 4 16.536 16.536 4 32 4zm1.414 29.414l20-20a2 2 0 0 0-2.828-2.828l-20 20a2 2 0 0 0 2.828 2.828z"
      />
    </svg>
  );
}
