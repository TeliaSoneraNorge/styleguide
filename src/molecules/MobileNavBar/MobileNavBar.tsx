import React from 'react';

export const MobileNavBar: React.FC = props => {
  return (
    <nav className="telia-mobile-nav-bar">
      <ul>{props.children}</ul>
    </nav>
  );
};
