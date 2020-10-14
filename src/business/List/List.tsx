import React from 'react';
import { ListItemProps } from './ListItem';
import { ListStyleContext, ListStyle } from './utils';

type ListItemElement = React.ReactElement<ListItemProps>;

type Props = ListStyle & {
  children: ListItemElement | Array<ListItemElement>;
};

export const List = ({ children, ...styleProps }: Props) => (
  <ListStyleContext.Provider value={styleProps}>
    <section className="telia-list">
      <ul className="telia-list__list">{children}</ul>
    </section>
  </ListStyleContext.Provider>
);
