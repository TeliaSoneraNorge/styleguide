import React from 'react';

export const PageContent: React.FC = (props) => {
  return <div className="telia-page-layout__content">{props.children}</div>;
};
