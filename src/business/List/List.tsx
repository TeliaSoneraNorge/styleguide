import React from 'react';
import { ListItemElement } from './ListItems';
import { ListStyleContext, ListStyle } from './utils';

type ListProps = ListStyle & {
  children: ListItemElement | Array<ListItemElement>;
};

export const List = ({ children, ...styleProps }: ListProps) => (
  <ListStyleContext.Provider value={styleProps}>
    <section className="telia-list">
      <ul className="telia-list__list">{children}</ul>
    </section>
  </ListStyleContext.Provider>
);
