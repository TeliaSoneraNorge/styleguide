import React from 'react';

export type ListItemColor = 'dark' | 'medium' | 'transparent' | 'white';
export type ListItemBorder = 'outlined' | 'underlined' | 'selected' | 'none';
export type ListItemType = 'item' | 'card';

export type ListStyle = {
  type?: ListItemType;
  border?: ListItemBorder;
  color?: ListItemColor;
};

export const ListStyleContext = React.createContext<ListStyle | undefined>(undefined);
