import * as React from 'react';

export interface MenuDropdownProps {
  type: 'B2C' | 'B2B'; 
  channel: 'mobile' | 'tv-internet' | 'min-bedrift' | 'min-portal' | 'bedriftsnett';
}

export const MenuDropdown: React.FC<{dropDownMenu: MenuDropdownProps}>;

export default MenuDropdown;
