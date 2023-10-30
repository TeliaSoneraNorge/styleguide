import React from 'react';
import cs from 'classnames';

interface Props {
  className?: string;
  borders?: boolean;
  children?: React.ReactNode;
}

export const Card: React.FC<Props> = (props) => (
  <div
    className={cs('telia-card', props.className, {
      'telia-card--bordered': props.borders,
    })}
  >
    {props.children}
  </div>
);
