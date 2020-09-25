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
