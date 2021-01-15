import React from 'react';
import { ListItemProps } from './ListItem';
import { ListStyleContext, ListStyle } from './utils';
import cn from 'classnames';

type ListItemElement = React.ReactElement<ListItemProps>;

type Props = ListStyle & {
  className?: string;
  children?: ListItemElement | Array<ListItemElement | null> | null;
};

export const List = ({ children, className, ...styleProps }: Props) => (
  <ListStyleContext.Provider value={styleProps}>
    <section className={cn('telia-list', className)}>
      <ul className="telia-list__list">{children}</ul>
    </section>
  </ListStyleContext.Provider>
);
