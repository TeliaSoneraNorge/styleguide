import React from 'react';
import cn from 'classnames';
import { colors } from '../../utils/colors';
import { SideMenuItem, useBreakpoint } from '../..';

type Props = {
  'aria-labelledby'?: string;
  /**
   * Used to set the background color for active elements.
   * Should match the background color of your application
   * @default 'white'
   */
  backgroundColor?: keyof Pick<typeof colors, 'white' | 'grey100'>;
  className?: string;
  /**
   * If the item should collapse to only show icons
   * @default true
   */
  collapse?: boolean;
};
export const SideMenu: React.FC<Props> = (props) => {
  const md = useBreakpoint('md');
  const collapse = props.collapse ?? true;

  return (
    <nav
      className={cn(
        'telia-side-menu',
        { 'telia-side-menu--white': props.backgroundColor !== 'grey100' },
        { 'telia-side-menu--collapsed': !md && collapse },
        props.className
      )}
      aria-label={props['aria-labelledby']}
    >
      <ul className="telia-side-menu__list">{props.children}</ul>
    </nav>
  );
};

export const SideMenuTop: React.FC = (props) => (
  <li className="telia-side-menu-top">
    <ul className="telia-side-menu-top__list">{props.children}</ul>
  </li>
);

export const SideMenuBottom: React.FC = (props) => (
  <li className="telia-side-menu-bottom">
    <ul className="telia-side-menu-bottom__list">{props.children}</ul>
  </li>
);
