//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: world-alert.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function WorldAlertIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--world-alert', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M21 10.664A23.897 23.897 0 0132 8c.844 0 1.678.044 2.5.129v5.543L31.172 17A4 4 0 0030 19.828V23.5a2 2 0 104 0v-3.672l3.328-3.328a4 4 0 001.172-2.828V8.89a24.041 24.041 0 0113.07 9.211l-3.484 3.484a2 2 0 102.828 2.828l2.752-2.752a23.813 23.813 0 011.872 5.628c.397 1.994.3 4.648.066 6.93a48.811 48.811 0 01-.512 3.608c-.017.094-.03.165-.04.212l-.01.052-.002.01v.002a2 2 0 003.92.792L57 38.5l1.96.395.002-.008.004-.019.013-.068.047-.248a52.892 52.892 0 00.557-3.923c.243-2.367.397-5.513-.121-8.12C56.909 13.676 45.586 4 32 4 16.536 4 4 16.536 4 32c0 4.29 1.221 8.85 3.284 12.862 2.06 4.006 5.033 7.605 8.668 9.841a2 2 0 002.096-3.406c-2.865-1.764-5.392-4.735-7.207-8.264C9.03 39.509 8 35.57 8 32c0-1.453.13-2.875.376-4.257l9.492-2.11A4 4 0 0021 21.73V10.664zm-4 2.6a24.06 24.06 0 00-7.403 10.11L17 21.73v-8.465z"
        clipRule="evenodd"
      />
      <path d="M19 36a4 4 0 00-4 4v3a4 4 0 004 4h1a2 2 0 100-4h-1v-3h4.813a2 2 0 100-4H19zm20.093 9.072c.024.504.288.744.792.744 1.032 0 2.04-.672 2.064-1.344l.384-9.456c0-.648-.336-.96-1.032-.96-1.32 0-2.688.888-2.688 1.728l.48 9.288zm1.368 6.072c.312 0 .6-.144.888-.408.576-.528 1.032-1.536 1.032-2.52 0-.648-.36-.96-1.056-.96-1.32 0-2.688.888-2.688 1.728 0 .6.888 2.16 1.824 2.16z" />
      <path
        fill-rule="evenodd"
        d="M44.946 26.267c-1.861-3.615-7.03-3.615-8.892 0L23.472 50.712C21.76 54.04 24.177 58 27.919 58h25.164c3.742 0 6.158-3.96 4.446-7.288L44.946 26.267zm-5.335 1.831a1 1 0 011.778 0l12.582 24.445a1 1 0 01-.89 1.457H27.919a1 1 0 01-.889-1.457l12.582-24.445z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
