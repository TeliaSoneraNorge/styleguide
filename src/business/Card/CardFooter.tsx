import React from 'react';
import cs from 'classnames';

export const CardFooter: React.FC<{ padding?: boolean }> = (props) => {
  return (
    <footer
      className={cs('telia-card-footer', {
        'telia-card-footer--padded': props.padding !== false,
      })}
    >
      {props.children}
    </footer>
  );
};
