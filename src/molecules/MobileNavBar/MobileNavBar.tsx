import React from 'react';

export const MobileNavBar: React.FC = (props: { children?: React.ReactNode }) => {
  return (
    <nav className="telia-mobile-nav-bar">
      <ul>{props.children}</ul>
    </nav>
  );
};
