import React from 'react';
import { ListItemProps, ListItem } from './ListItem';

export const ListCard = ({ border, ...props }: ListItemProps) => (
  <ListItem {...props} border={border ? border : 'shadow'} type="card" />
);
