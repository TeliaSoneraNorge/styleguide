import React from 'react';

export type ListItemModifiers = {
  none?: boolean;
  compact?: boolean;
  /**
   * type
   */
  card?: boolean;
  item?: boolean;
  /**
   * decoration
   */
  underlined?: boolean;
  shadow?: boolean;
  /**
   * colors
   */
  dark?: boolean;
  light?: boolean;
  medium?: boolean;
};

export type ListItemColor = 'dark' | 'medium' | 'light';
export type ListItemBorder = 'shadow' | 'underlined' | 'none';
export type ListItemType = 'item' | 'card';

export type ListStyle = {
  type?: ListItemType;
  border?: ListItemBorder;
  color?: ListItemColor;
};

export function getStyleContext(params: ListStyle): ListItemModifiers {
  const context: ListItemModifiers = {};
  if (params.type) context[params.type] = true;
  if (params.border) context[params.border] = true;
  if (params.color) context[params.color] = true;
  return context;
}

export const ListStyleContext = React.createContext<ListStyle | undefined>(undefined);
