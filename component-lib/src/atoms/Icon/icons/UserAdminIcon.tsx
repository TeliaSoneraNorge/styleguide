//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: user-admin.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function UserAdminIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--user-admin', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M47 34a2 2 0 0 1 2 2v1.2a10.09 10.09 0 0 1 3.51 1.46l1.08-1.07a2 2 0 0 1 2.82 2.82l-1.07 1.08A10.09 10.09 0 0 1 56.8 45H58a2 2 0 1 1 0 4h-1.2a10.09 10.09 0 0 1-1.46 3.51l1.07 1.08a2 2 0 0 1-2.82 2.82l-1.08-1.07A10.09 10.09 0 0 1 49 56.8V58a2 2 0 1 1-4 0v-1.2a10.09 10.09 0 0 1-3.51-1.46l-1.08 1.07a2 2 0 1 1-2.82-2.82l1.07-1.08A10.09 10.09 0 0 1 37.2 49H36a2 2 0 1 1 0-4h1.2a10.09 10.09 0 0 1 1.46-3.51l-1.07-1.08a2 2 0 0 1 2.82-2.82l1.08 1.07A10.09 10.09 0 0 1 45 37.2V36a2 2 0 0 1 2-2zM32 6c8.837 0 16 7.163 16 16s-7.163 16-16 16a15.94 15.94 0 0 1-10.65-4.059c-.146.048-.3.08-.461.092a14.1 14.1 0 0 0-7.693 3.071c-1.556 1.26-2.86 2.908-3.852 4.874-.447.887-.869 2.098-1.095 3.286-.075.393-.12.763-.156 1.31l-.03.516-.031.719-.038 1.076c-.022.937.007 1.502.108 2l.042.157.11.34c.16.494.414.899.885 1.425.22.247.39.384.72.58.463.273.94.467 1.379.543l.074.011.19.023.646.054.334.004 1.221-.024 1.003-.008 1.788.006L31.999 54A2 2 0 0 1 32 58H20.073l-4.978-.01-1.023.003-1.647.03c-.184 0-.344-.003-.497-.01l-.301-.02-.604-.057-.238-.03-.227-.035c-.97-.167-1.883-.538-2.733-1.04a6.595 6.595 0 0 1-1.667-1.357c-.815-.91-1.359-1.776-1.71-2.857l-.12-.374a6.608 6.608 0 0 1-.093-.33l-.053-.231c-.153-.755-.205-1.457-.195-2.448L4 48.602l.047-1.249c.057-1.338.114-2.004.272-2.837.298-1.565.843-3.129 1.454-4.34 1.241-2.46 2.9-4.557 4.906-6.18a18.122 18.122 0 0 1 7.678-3.633A15.923 15.923 0 0 1 16 22c0-8.837 7.163-16 16-16zm15 35a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM32 10c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
      />
    </svg>
  );
}
