import React from 'react';
import cn from 'classnames';

type Props = {
  'aria-labelledby'?: string;
  className?: string;
};
export const SideMenu: React.FC<Props> = (props) => {
  return (
    <nav className={cn('telia-side-menu', props.className)} ariaaria-label={props['aria-labelledby']}>
      <ul>{props.children}</ul>
    </nav>
  );
};

export const SideMenuTop: React.FC = (props) => (
  <li className="telia-side-menu-top">
    <ul>{props.children}</ul>
  </li>
);

export const SideMenuBottom: React.FC = (props) => (
  <li className="telia-side-menu-bottom">
    <ul>{props.children}</ul>
  </li>
);
