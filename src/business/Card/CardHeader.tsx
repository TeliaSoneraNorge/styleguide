import React from 'react';
import cn from 'classnames';

type Props = {
  padding?: boolean;
};

export const CardHeader: React.FC<Props> = (props) => {
  return (
    <header
      className={cn('telia-card-header', {
        'telia-card-header--padded': props.padding !== false,
      })}
    >
      {props.children}
    </header>
  );
};
