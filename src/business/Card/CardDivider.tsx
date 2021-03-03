import React from 'react';
import cs from 'classnames';

type Props = {
  className?: string;
  padding?: boolean;
};

export const CardDivider = (props: Props) => {
  return (
    <hr
      className={cs('telia-card__divider', props.className, {
        'telia-card__divider--padded': props.padding !== false,
      })}
    />
  );
};
