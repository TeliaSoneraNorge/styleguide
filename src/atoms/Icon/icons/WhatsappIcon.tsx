//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: whatsapp.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function WhatsappIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--whatsapp', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M51.832 12.143C46.578 6.887 39.573 4 32.114 4 16.754 4 4.24 16.453 4.227 31.74a27.71 27.71 0 003.717 13.878L4 60l14.785-3.858a28.003 28.003 0 0013.329 3.379h.013c15.36 0 27.873-12.453 27.886-27.754-.013-7.41-2.914-14.382-8.181-19.624zM32.114 54.824a23.193 23.193 0 01-11.805-3.22l-.842-.505-8.77 2.289 2.34-8.516-.548-.878a22.882 22.882 0 01-3.543-12.267c0-12.693 10.4-23.044 23.181-23.044 6.19 0 12.005 2.409 16.39 6.76 4.371 4.363 6.777 10.15 6.777 16.31-.013 12.734-10.414 23.071-23.18 23.071zm12.713-17.27c-.695-.345-4.117-2.022-4.76-2.261-.64-.226-1.109-.346-1.563.346-.468.692-1.805 2.262-2.206 2.714-.401.466-.816.519-1.51.173-.696-.346-2.942-1.078-5.602-3.446-2.072-1.836-3.462-4.111-3.877-4.803-.4-.692-.04-1.064.308-1.41.307-.306.695-.812 1.042-1.211.348-.4.468-.692.696-1.157.227-.466.12-.865-.054-1.211-.174-.346-1.564-3.765-2.152-5.15-.562-1.356-1.137-1.17-1.564-1.183-.401-.027-.87-.027-1.337-.027-.468 0-1.217.173-1.858.865-.642.692-2.434 2.368-2.434 5.787 0 3.42 2.5 6.706 2.848 7.172.348.465 4.906 7.464 11.898 10.47a38.462 38.462 0 003.97 1.464c1.671.532 3.182.453 4.385.28 1.337-.2 4.117-1.677 4.706-3.3.575-1.623.575-3.007.4-3.3-.173-.292-.64-.465-1.336-.811z"
        clipRule="evenodd"
      />
    </svg>
  );
}
