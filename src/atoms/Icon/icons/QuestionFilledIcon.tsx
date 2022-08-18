//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: question-filled.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function QuestionFilledIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--question-filled', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M4 32C4 16.536 16.536 4 32 4c15.457.017 27.983 12.543 28 28 0 15.464-12.536 28-28 28S4 47.464 4 32zm32.311.906l-4.369 4.666c-.551.551-1.018.806-1.484.806-.721 0-1.4-.51-2.036-1.485-.424-.72-.636-1.272-.636-1.611 0-.34.17-.679.466-1.06l4.114-4.37c1.91-2.078 2.715-3.477 2.715-4.962 0-1.696-1.4-2.969-3.308-2.969-1.654 0-2.884.764-4.708 2.8-.467.509-.806.848-1.018 1.017-.255.17-.51.255-.764.255-1.357 0-2.587-2.29-2.587-3.011 0-.297.127-.68.424-1.103l.138-.202c2.055-2.936 5.498-4.76 9.024-4.76 3.35 0 6.022 1.441 7.422 3.732.721 1.145 1.06 2.46 1.06 3.86 0 2.555-1.009 4.607-4.029 7.935l-.424.462zM27.659 43.68c0 1.06 1.569 3.817 3.223 3.817.551 0 1.06-.255 1.57-.721 1.017-.933 1.823-2.715 1.823-4.454 0-1.145-.636-1.696-1.866-1.696-2.333 0-4.75 1.57-4.75 3.054z"
        clipRule="evenodd"
      />
    </svg>
  );
}
