import * as React from 'react';

export interface ProductListItems {
  iconName: string;
  iconColor?: 'white' | 'black' | 'purple';
  title: string;
  description?: string;
  href?: string;
  onClick?: (...args: any[]) => any;
  style?: 'promo';
}

export interface ProductListProps {
  /**
   * An array of items where each item can have properties of icon name, icon color, title, description and href.
   */
  items?: ProductListItems[];
}

export const ProductList: React.FC<ProductListProps>;

export default ProductList;
