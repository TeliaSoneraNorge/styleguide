import React from 'react';

interface Props {
  'aria-labelledby'?: string;
}
export const SideMenu: React.FC<Props> = props => {
  return (
    <nav className="telia-side-menu" ariaaria-label={props['aria-labelledby']}>
      <ul>{props.children}</ul>
    </nav>
  );
};

export const SideMenuTop: React.FC = props => (
  <li className="telia-side-menu-top">
    <ul>{props.children}</ul>
  </li>
);

export const SideMenuBottom: React.FC = props => (
  <li className="telia-side-menu-bottom">
    <ul>{props.children}</ul>
  </li>
);
