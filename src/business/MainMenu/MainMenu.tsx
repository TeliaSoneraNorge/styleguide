import React from 'react';
import cs from 'classnames';

import { MainMenuItemProps } from './MainMenuItem';

interface Props {
  className?: string;
  children?: Array<React.ReactElement<MainMenuItemProps>>;
}

export const MainMenu: React.FC<Props> = (props) => (
  <nav className={cs('Business-MainMenu', props.className)}>
    <ul className="Business-MainMenu--list">{props.children}</ul>
  </nav>
);
