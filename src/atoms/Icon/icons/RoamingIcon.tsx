//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: roaming.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function RoamingIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--roaming', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M37 4c-9.389 0-17 7.611-17 17s7.611 17 17 17 17-7.611 17-17S46.389 4 37 4zm-8.455 13.933l-4.356.847a12.969 12.969 0 013.629-6.983l.727 6.136zm3.972-.47l-.98-8.263a12.951 12.951 0 016.531-1.157v3.244l-1.833 1.753A4 4 0 0035 15.93v.08a4 4 0 004 4h2.444l.912 2.27c.676 1.681 2.86 2.107 4.119.804l3.441-3.567c.056.487.084.982.084 1.483 0 5.115-2.954 9.54-7.25 11.663v-3.235a4 4 0 00-4-4h-6.764a4 4 0 00-3.578 2.212l-1.043 2.088a12.953 12.953 0 01-3.232-6.862l5.176-1.006a4 4 0 003.208-4.398zm-1.962 14.83A12.94 12.94 0 0037 34c.593 0 1.178-.04 1.75-.117v-4.455h-6.763l-1.432 2.865zm17.658-17.876a13.05 13.05 0 00-6.145-5.392v2.262a4 4 0 01-1.235 2.89L39 15.931v.08h2.444a4 4 0 013.711 2.508l.05.121 1.747-1.81 1.26-2.413z"
        clipRule="evenodd"
      />
      <path d="M29 52a2 2 0 11-4 0 2 2 0 014 0z" />
      <path
        fillRule="evenodd"
        d="M19 4a8 8 0 00-8 8v40a8 8 0 008 8h16a8 8 0 008-8V42a2 2 0 10-4 0v2H15V12a4 4 0 014-4h2.5a2 2 0 100-4H19zm-4 44v4a4 4 0 004 4h16a4 4 0 004-4v-4H15z"
        clipRule="evenodd"
      />
    </svg>
  );
}