import React from 'react';
import cs from 'classnames';

type Props = {
  className?: string;
  padding?: boolean;
};

export const CardFooter: React.FC<Props> = (props) => {
  return (
    <footer
      className={cs('telia-card-footer', props.className, {
        'telia-card-footer--padded': props.padding !== false,
      })}
    >
      {props.children}
    </footer>
  );
};
