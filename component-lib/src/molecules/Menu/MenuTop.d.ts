import * as React from 'react';

export interface MenuTopProps {
  menuLinks?: any[];
  activeIndex?: number;
  LinkTemplate?: (...args: any[]) => any;
}

const MenuTop: React.FC<MenuTopProps>;

export default MenuTop;
