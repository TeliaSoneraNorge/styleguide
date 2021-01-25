import React from 'react';
import cs from 'classnames';

type Props = {
  padding?: boolean;
};
export const CardDivider = (props: Props) => {
  return (
    <hr
      className={cs('telia-card-divider', {
        'telia-card-divider--padded': props.padding !== false,
      })}
    />
  );
};
