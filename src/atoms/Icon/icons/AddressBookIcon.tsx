//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: address-book.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function AddressBookIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--address-book', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M26.355 25.972a7.7 7.7 0 1114.759 3.08c.75.351 1.465.813 2.097 1.356C44.73 31.713 46 33.697 46 36.183v.602A5.215 5.215 0 0140.785 42h-13.57A5.215 5.215 0 0122 36.785v-.602c0-2.515 1.338-4.498 2.858-5.785a9.574 9.574 0 012.13-1.362 7.673 7.673 0 01-.633-3.064zm7.7-3.7a3.7 3.7 0 100 7.4 3.7 3.7 0 000-7.4zM40.785 38c.67 0 1.215-.544 1.215-1.215v-.602c0-1.038-.524-1.991-1.397-2.742-.752-.646-1.598-.998-2.22-1.1a7.664 7.664 0 01-4.328 1.331 7.664 7.664 0 01-4.343-1.34c-.573.086-1.46.434-2.27 1.12-.909.769-1.442 1.722-1.442 2.73v.602c0 .672.544 1.216 1.215 1.216h13.57z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M13 8a4 4 0 014-4h29a8 8 0 018 8v40a8 8 0 01-8 8H17a4 4 0 01-4-4v-7h-1a2 2 0 110-4h1v-6h-1a2 2 0 110-4h1v-6h-1a2 2 0 110-4h1v-6h-1a2 2 0 110-4h1V8zm4 41h1a2 2 0 100-4h-1v-6h1a2 2 0 100-4h-1v-6h1a2 2 0 100-4h-1v-6h1a2 2 0 100-4h-1V8h29a4 4 0 014 4v40a4 4 0 01-4 4H17v-7z"
        clipRule="evenodd"
      />
    </svg>
  );
}