import React from 'react';

export const SideMenuFooter: React.FC = props => (
  <li className="telia-side-menu-footer">
    <ul>{props.children}</ul>
  </li>
);
