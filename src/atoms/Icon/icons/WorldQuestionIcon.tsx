//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: world-question.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function WorldQuestionIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--world-question', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M21 10.664A23.897 23.897 0 0132 8c.84 0 1.675.048 2.5.142v5.53L31.172 17A4 4 0 0030 19.828V23a2 2 0 104 0v-3.172l3.328-3.328a4 4 0 001.172-2.828V8.958c5.3 1.572 9.964 4.944 13.087 9.126l-3.001 3.002a2 2 0 102.828 2.828l2.328-2.328c.9 1.828 1.512 3.745 1.776 5.684a2 2 0 003.964-.54C57.838 14.674 45.547 4 32 4 16.536 4 4 16.536 4 32c0 13 8.597 23.722 20.037 26.446a2 2 0 10.926-3.892C15.403 52.278 8 43.23 8 32c0-1.453.13-2.875.376-4.257l9.492-2.11A4 4 0 0021 21.73V10.664zm-4 2.6a24.06 24.06 0 00-7.403 10.11L17 21.73v-8.465z"
        clipRule="evenodd"
      />
      <path d="M19 36a4 4 0 00-4 4v3a4 4 0 004 4h1a2 2 0 100-4h-1v-3h1.5a2 2 0 100-4H19zm27.518 2.136c0 1.512-.624 2.712-2.52 4.752l-2.472 2.64c-.312.312-.576.456-.84.456-.408 0-.792-.288-1.152-.84-.24-.408-.36-.72-.36-.912 0-.192.096-.384.264-.6l2.328-2.472c1.08-1.176 1.536-1.968 1.536-2.808 0-.96-.792-1.68-1.872-1.68-.936 0-1.632.432-2.664 1.584-.264.288-.456.48-.576.576a.774.774 0 01-.432.144c-.768 0-1.464-1.296-1.464-1.704 0-.168.072-.384.24-.624 1.152-1.728 3.144-2.808 5.184-2.808 1.896 0 3.408.816 4.2 2.112.408.648.6 1.392.6 2.184zm-4.704 12.6c-.288.264-.576.408-.888.408-.936 0-1.824-1.56-1.824-2.16 0-.84 1.368-1.728 2.688-1.728.696 0 1.056.312 1.056.96 0 .984-.456 1.992-1.032 2.52z" />
      <path
        fill-rule="evenodd"
        d="M24 42.5C24 32.835 31.835 25 41.5 25S59 32.835 59 42.5 51.165 60 41.5 60 24 52.165 24 42.5zM41.5 29C34.044 29 28 35.044 28 42.5S34.044 56 41.5 56 55 49.956 55 42.5 48.956 29 41.5 29z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
