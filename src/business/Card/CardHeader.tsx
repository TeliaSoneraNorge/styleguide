import React from 'react';
import cn from 'classnames';

type Props = {
  className?: string;
  padding?: boolean;
};

export const CardHeader: React.FC<Props> = (props) => {
  return (
    <header
      className={cn('telia-card__header', props.className, {
        'telia-card__header--padded': props.padding !== false,
      })}
    >
      {props.children}
    </header>
  );
};
