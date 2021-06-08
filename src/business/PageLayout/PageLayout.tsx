import React from 'react';
import cn from 'classnames';

type Props =
  | {
      header?: React.ReactNode;
      body?: React.ReactNode;
      left?: React.ReactNode;
      right?: React.ReactNode;
      footer?: React.ReactNode;
    }
  | { children: React.ReactNode };

export const PageLayout = (props: Props) => {
  if ('children' in props) {
    return <div className="telia-page-layout">{props.children}</div>;
  }
  const hasSides = props.left || props.right;

  return (
    <div className="telia-page-layout">
      <div className="telia-page-layout__header">{props.header}</div>
      <div className={cn('telia-page-layout__content', { 'telia-page-layout__content--grid': hasSides })}>
        {props.left && <div className="telia-page-layout__left">{props.left}</div>}
        <div className="telia-page-layout__content__main">
          <div className="telia-page-layout__body">{props.body}</div>
          <div className="telia-page-layout__footer">{props.footer}</div>
        </div>
        {props.right && <div className="telia-page-layout__right">{props.right}</div>}
      </div>
    </div>
  );
};
