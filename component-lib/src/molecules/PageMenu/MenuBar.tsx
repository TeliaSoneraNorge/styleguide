import React from 'react';

import MenuItem from './MenuItem';

const MenuBar = ({
  items = [],
  ariaLabel,
  isEmphasised
}: any) => (
  <ul role="menubar" aria-label={ariaLabel} className="page-menu__item-list">
    {/* @ts-expect-error ts-migrate(7006) FIXME: Parameter 'link' implicitly has an 'any' type. */}
    {items.map(link => (
      <MenuItem item={link} key={link.text} isEmphasised={isEmphasised} />
    ))}
  </ul>
);

export default MenuBar;
