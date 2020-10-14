import React from 'react';
import { ListItemElement } from './ListItems';
import { ListStyleContext, ListStyle } from './utils';

type ListProps = {
  children: ListItemElement | Array<ListItemElement>;
} & ListStyle;

export const List = ({ children, type, color, border }: ListProps) => (
  <ListStyleContext.Provider value={{ type, color, border }}>
    <section className="telia-list">
      <ul className="telia-list__list">{children}</ul>
    </section>
  </ListStyleContext.Provider>
);
