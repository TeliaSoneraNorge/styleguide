import React from 'react';
import cn from 'classnames';

type Props = { className?: string } & (
  | {
      navBar?: { className?: string; component: React.ReactNode };
      header?: { className?: string; component: React.ReactNode };
      body?: { className?: string; component: React.ReactNode };
      left?: { className?: string; component: React.ReactNode };
      right?: { className?: string; component: React.ReactNode };
      footer?: { className?: string; component: React.ReactNode };
    }
  | { children: React.ReactNode }
);

export const PageLayout = (props: Props) => {
  if ('children' in props) {
    return <div className={cn('telia-page-layout', props.className)}>{props.children}</div>;
  }
  const hasSides = props.left || props.right;

  return (
    <div className={cn('telia-page-layout', props.className)}>
      {props.navBar && (
        <div className={cn('telia-page-layout__nav-bar', props.navBar.className)}>{props.navBar.component}</div>
      )}
      <div className={cn('telia-page-layout__header', props.header?.className)}>{props.header?.component}</div>
      <div className={cn('telia-page-layout__content', { 'telia-page-layout__content--grid': hasSides })}>
        {hasSides && (
          <div className={cn('telia-page-layout__left', props.left?.className)}>{props.left?.component}</div>
        )}
        <div className="telia-page-layout__content__main">
          <div className={cn('telia-page-layout__body', props.body?.className)}>{props.body?.component}</div>
          <div className={cn('telia-page-layout__footer', props.footer?.className)}>{props.footer?.component}</div>
        </div>
        {hasSides && (
          <div className={cn('telia-page-layout__right', props.right?.className)}>{props.right?.component}</div>
        )}
      </div>
    </div>
  );
};
