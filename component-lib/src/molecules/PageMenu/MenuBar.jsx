import React from 'react';

import MenuItem from './MenuItem';

const MenuBar = ({ items = [], ariaLabel, isEmphasised }) => (
    <ul
        role="menubar"
        aria-label={ariaLabel}
        className="page-menu__item-list">
        {items.map((link, i) => <MenuItem item={link} key={i} isEmphasised={isEmphasised} />)}
    </ul>
);

export default MenuBar;