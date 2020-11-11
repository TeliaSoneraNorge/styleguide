import React from 'react';
import { ListItemProps, ListItem } from './ListItem';

export const ListCard: React.FC<ListItemProps> = ({ border, ...props }) => (
  <ListItem {...props} border={border ? border : 'shadow'} type="card" />
);
