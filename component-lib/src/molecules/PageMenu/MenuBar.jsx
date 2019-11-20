import React from 'react';

import MenuItem from './MenuItem';

const MenuBar = ({ items = [], ariaLabel, isEmphasised }) => (
  <ul role="menubar" aria-label={ariaLabel} className="page-menu__item-list">
    {items.map(link => (
      <MenuItem item={link} key={link.text} isEmphasised={isEmphasised} />
    ))}
  </ul>
);

export default MenuBar;
