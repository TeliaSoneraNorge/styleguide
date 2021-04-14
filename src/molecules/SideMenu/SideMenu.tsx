import React from 'react';
import cn from 'classnames';
import { colors } from '../../utils/colors';

type Props = {
  'aria-labelledby'?: string;
  /**
   * Used to set the background color for active elements.
   * Should match the background color of you application
   * @default 'white'
   */
  backgroundColor?: keyof Pick<typeof colors, 'white' | 'grey100'>;
  className?: string;
};
export const SideMenu: React.FC<Props> = (props) => {
  return (
    <nav
      className={cn('telia-side-menu', `telia-side-menu--${props.backgroundColor ?? 'white'}`, props.className)}
      aria-label={props['aria-labelledby']}
    >
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
