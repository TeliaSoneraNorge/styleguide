import React from 'react';

export type ListItemColor = 'dark' | 'medium' | 'light';
export type ListItemBorder = 'outlined' | 'underlined' | 'none';
export type ListItemType = 'item' | 'card';

export type ListStyle = {
  type?: ListItemType;
  border?: ListItemBorder;
  color?: ListItemColor;
};

export const ListStyleContext = React.createContext<ListStyle | undefined>(undefined);
