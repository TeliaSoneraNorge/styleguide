import * as React from 'react';

export interface MenuDropdownProps {
  type: 'B2C' | 'B2B'; 
  channel: 'mobil' | 'tv-internet' | 'min-bedrift' | 'min-portal' | 'bedriftsnett';
  visible: boolean;
}

export const MenuDropdown: React.FC<{dropdownMenu: MenuDropdownProps, isLoggedIn?: boolean}>;

export default MenuDropdown;
