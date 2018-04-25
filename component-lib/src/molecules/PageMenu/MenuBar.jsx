import React from 'react';
import MenuItem from './MenuItem';

const MenuBar = ({ items, loggedIn, ariaLabel }) => (
    <ul
        role="menubar"
        aria-label={ariaLabel}
        className="page-menu__item-list">
        {items.map((link, i) => <MenuItem item={link} key={i} loggedIn={loggedIn} />)}
    </ul>
);

export default MenuBar;