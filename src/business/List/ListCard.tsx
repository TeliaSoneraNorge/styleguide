import React from 'react';
import { ListItemProps, ListItem } from './ListItem';
import { ListStyle } from './utils';

export const ListCard: React.FC<ListItemProps & ListStyle> = ({ border, ...props }) => (
  <ListItem {...props} border={border ? border : 'shadow'} type="card" />
);
