import cn from 'classnames';
import React from 'react';
import { BaseListItemProps, BaseListItem } from './BaseListItem';

export const ListItem = (props: BaseListItemProps) => <BaseListItem {...props} />;
export const ListCard = ({ border, ...props }: BaseListItemProps) => (
  <BaseListItem {...props} border={border ? border : 'shadow'} type="card" />
);

type ListHeadingProps = {
  title: string;
  compact?: boolean;
};

export const ListHeading = ({ title, compact }: ListHeadingProps) => (
  <li
    className={cn('telia-listItem telia-listItem__heading', {
      'telia-listItem__heading--compact': compact,
    })}
  >
    <h3 className="telia-listItem__name">{title}</h3>
  </li>
);

export type ListItemElement = React.ReactElement<BaseListItemProps>;
