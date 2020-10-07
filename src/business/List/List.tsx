import React from 'react';

import { ListItemModifiers, ListStyleContext } from './BaseListItem';
import { ListItemElement } from './ListItems';

type ListProps = {
  children: ListItemElement | Array<ListItemElement>;
  type?: 'item' | 'card';
  style?: 'dark' | 'flat' | 'underlined' | 'shadow';
};

function getListContext(styles: ListItemModifiers, props: ListProps): ListItemModifiers {
  const context: ListItemModifiers = { ...styles };
  if ('type' in props && props.type === 'card') context.card = true;
  if ('style' in props && props.style) context[props.style] = true;
  return context;
}

export const List = ({ children, type, style }: ListProps) => (
  <ListStyleContext.Provider value={getListContext({}, { children, type, style })}>
    <section className="telia-list">
      <ul className="telia-list__list">{children}</ul>
    </section>
  </ListStyleContext.Provider>
);
