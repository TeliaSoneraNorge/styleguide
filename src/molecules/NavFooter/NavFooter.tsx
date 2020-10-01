import React from 'react';

export const NavFooter: React.FC = props => {
  return (
    <nav className="telia-nav-footer">
      <ul>{props.children}</ul>
    </nav>
  );
};
