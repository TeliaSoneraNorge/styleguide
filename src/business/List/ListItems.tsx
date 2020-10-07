import cn from 'classnames';
import React from 'react';

import { BaseListItemProps, ListItemModifiers, BaseListItem } from './BaseListItem';

function propsWithStyle(
  props: ListItemProps | ListCardProps,
  style: ListItemStyle | ListCardStyle
): BaseListItemProps & ListItemModifiers {
  return { ...props, [style]: true };
}

type ListItemStyle = 'dark' | 'flat' | 'underlined' | 'none';
type ListItemProps = BaseListItemProps & {
  style?: ListItemStyle;
  compact?: boolean;
};

export const ListItem = ({ style, ...props }: ListItemProps) => (
  <BaseListItem {...propsWithStyle(props, style as ListItemStyle)} />
);

type ListCardStyle = 'dark' | 'flat' | 'shadow' | 'none';
type ListCardProps = BaseListItemProps & {
  style?: ListCardStyle;
  compact?: boolean;
};

export const ListCard = ({ style, ...props }: ListCardProps) => (
  <BaseListItem {...propsWithStyle(props, style || ('shadow' as ListCardStyle))} card={true} />
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

export type ListItemElement = React.ReactElement<ListCardProps | ListItemProps>;
