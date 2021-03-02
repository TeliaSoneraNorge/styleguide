import React from 'react';
import cs from 'classnames';

type Props = {
  padding?: boolean;
  className?: string;
};
export const CardBody: React.FC<Props> = (props) => {
  return (
    <div
      className={cs('telia-card--body', props.className, {
        'telia-card--body__padded': props.padding !== false,
      })}
    >
      {props.children}
    </div>
  );
};
