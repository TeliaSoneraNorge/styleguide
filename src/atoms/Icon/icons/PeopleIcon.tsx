//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: people.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function PeopleIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--people', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 65"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M60.166 30.333V26a10.842 10.842 0 00-7.002-10.12 8.667 8.667 0 10-16.329 0A10.87 10.87 0 0032 19.527a10.869 10.869 0 00-4.836-3.649 8.667 8.667 0 10-16.329 0A10.842 10.842 0 003.833 26v4.334a6.507 6.507 0 006.5 6.5c.002.982.172 1.956.502 2.88a10.842 10.842 0 00-7.002 10.12v4.334a6.507 6.507 0 006.5 6.5h17.333A6.466 6.466 0 0032 58.997a6.466 6.466 0 004.333 1.67h17.333a6.507 6.507 0 006.5-6.5v-4.334a10.842 10.842 0 00-7.002-10.12c.33-.924.5-1.898.502-2.88a6.507 6.507 0 006.5-6.5zM45 8.667a4.333 4.333 0 110 8.666 4.333 4.333 0 010-8.666zm-26 0a4.333 4.333 0 110 8.666 4.333 4.333 0 010-8.666zm10.833 45.5a2.17 2.17 0 01-2.167 2.166H10.333a2.17 2.17 0 01-2.167-2.166v-4.334a6.509 6.509 0 015.255-6.377 8.634 8.634 0 0011.157 0 6.509 6.509 0 015.255 6.377v4.334zM14.666 36.833a4.333 4.333 0 118.667 0 4.333 4.333 0 01-8.667 0zm41.167 13v4.334a2.17 2.17 0 01-2.167 2.166H36.333a2.17 2.17 0 01-2.167-2.166v-4.334a6.509 6.509 0 015.255-6.377 8.634 8.634 0 0011.157 0 6.509 6.509 0 015.255 6.377zm-15.167-13a4.333 4.333 0 118.667 0 4.333 4.333 0 01-8.667 0zM52.494 32.5a8.654 8.654 0 00-15.659 7.213A10.87 10.87 0 0032 43.36a10.87 10.87 0 00-4.836-3.648A8.656 8.656 0 0011.506 32.5h-1.173a2.17 2.17 0 01-2.167-2.167V26a6.508 6.508 0 015.255-6.378 8.634 8.634 0 0011.157 0A6.508 6.508 0 0129.833 26v4.333a2.167 2.167 0 104.333 0V26a6.509 6.509 0 015.255-6.378 8.634 8.634 0 0011.157 0A6.508 6.508 0 0155.833 26v4.333a2.17 2.17 0 01-2.167 2.167h-1.172z"
        clipRule="evenodd"
      />
    </svg>
  );
}
