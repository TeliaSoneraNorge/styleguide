import React from 'react';

interface Props {
  navBar?: React.ReactNode;
}
export const PageHeader: React.FC<Props> = (props) => {
  return (
    <div className="telia-page-layout__header">
      {props.navBar ? <div className="telia-page-layout__header__nav-bar">{props.navBar}</div> : null}
      {props.children}
    </div>
  );
};
