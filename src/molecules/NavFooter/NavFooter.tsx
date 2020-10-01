import React from 'react';

/**
 * Typically used as a mobile menu
 */
export const NavFooter: React.FC = props => {
  return (
    <nav className="telia-nav-footer">
      <ul>{props.children}</ul>
    </nav>
  );
};
