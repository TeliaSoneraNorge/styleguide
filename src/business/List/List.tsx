import React from 'react';
import { ListItemProps } from './ListItem';
import { ListStyleContext, ListStyle } from './utils';
import cn from 'classnames';
import { emptySvg } from '../assets/emptySvg';

type ListItemElement = React.ReactElement<ListItemProps>;

type Props = ListStyle & {
  className?: string;
  children?: ListItemElement | Array<ListItemElement | null> | null;
  listIsEmpty?: boolean;
  emptyListLabel?: string;
};

export const List = ({ children, className, listIsEmpty, emptyListLabel, ...styleProps }: Props) => (
  <>
    {listIsEmpty ? (
      <div className="telia-list__empty-state">
        {emptySvg}
        <div>{emptyListLabel}</div>
      </div>
    ) : (
      <ListStyleContext.Provider value={styleProps}>
        <section className={cn('telia-list', className)}>
          <ul className="telia-list__list">{children}</ul>
        </section>
      </ListStyleContext.Provider>
    )}
  </>
);
