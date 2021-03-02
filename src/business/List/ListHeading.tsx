import cn from 'classnames';
import React from 'react';

type Props = {
  title: string;
  compact?: boolean;
};

export const ListHeading = (props: Props) => (
  <li
    className={cn('telia-listItem telia-listItem--heading', {
      'telia-listItem--heading__compact': props.compact,
    })}
  >
    <h3 className="telia-listItem--name">{props.title}</h3>
  </li>
);
