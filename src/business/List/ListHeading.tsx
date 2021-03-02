import cn from 'classnames';
import React from 'react';

type Props = {
  title: string;
  compact?: boolean;
};

export const ListHeading = (props: Props) => (
  <li
    className={cn('telia-listItem telia-listItem__heading', {
      'telia-listItem__heading--compact': props.compact,
    })}
  >
    <h3 className="telia-listItem__name">{props.title}</h3>
  </li>
);
