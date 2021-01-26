import React from 'react';
import cs from 'classnames';

interface Props {
  className?: string;
  borders?: boolean;
}

export const Card: React.FC<Props> = (props) => (
  <div
    className={cs('telia-card', props.className, {
      'telia-card--bordered': props.borders !== false,
    })}
  >
    {props.children}
  </div>
);
