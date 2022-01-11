import React from 'react';
import cn from 'classnames';

type Props = {
  className?: string;
  navBar?: { className?: string; component: React.ReactNode };
  header?: { className?: string; component: React.ReactNode };
  body?: { className?: string; component: React.ReactNode };
  left?: { className?: string; component: React.ReactNode };
  right?: { className?: string; component: React.ReactNode; sticky?: boolean };
  footer?: { className?: string; component: React.ReactNode; sticky?: boolean };
};

export const PageLayout = (props: Props) => {
  const hasSides = props.left || props.right;

  return (
    <div className={cn('telia-page-layout', props.className)}>
      {props.navBar && (
        <div className={cn('telia-page-layout__nav-bar', props.navBar.className)}>{props.navBar.component}</div>
      )}
      <div className={cn('telia-page-layout__header', props.header?.className)}>{props.header?.component}</div>

      <div className="telia-page-layout__content">
        {hasSides && (
          <div className={cn('telia-page-layout__left', props.left?.className)}>{props.left?.component}</div>
        )}

        <div className={cn('telia-page-layout__body', props.body?.className)}>{props.body?.component}</div>
        {hasSides && (
          <div
            className={cn(
              'telia-page-layout__right',
              { 'telia-page-layout__right--sticky': props.right?.sticky },
              props.right?.className
            )}
          >
            {props.right?.component}
          </div>
        )}
        {!props.footer?.sticky && (
          <div className={cn('telia-page-layout__footer', props.footer?.className)}>{props.footer?.component}</div>
        )}
      </div>
      {props.footer?.sticky && (
        <div
          className={cn(
            'telia-page-layout__footer',
            { 'telia-page-layout__footer--sticky': props.footer.sticky },
            props.footer?.className
          )}
        >
          <div className={cn({ 'telia-page-layout__footer__content--sticky': props.footer.sticky })}>
            {props.footer?.component}
          </div>
        </div>
      )}
    </div>
  );
};
