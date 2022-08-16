import React from 'react';
import cs from 'classnames';

type Props = {
  padding?: boolean;
  className?: string;
  children?: React.ReactNode;
};
export const CardBody: React.FC<Props> = (props) => {
  return (
    <div
      className={cs('telia-card__body', props.className, {
        'telia-card__body--padded': props.padding !== false,
      })}
    >
      {props.children}
    </div>
  );
};
