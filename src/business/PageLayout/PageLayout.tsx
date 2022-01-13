import React from 'react';
import cn from 'classnames';

type Props = {
  className?: string;
  navBar?: { className?: string; component: React.ReactNode };
  header?: { className?: string; component: React.ReactNode };
  body?: { className?: string; component: React.ReactNode };
  left?: { className?: string; component: React.ReactNode };
  right?: { className?: string; component: React.ReactNode; fixed?: boolean };
  footer?: { className?: string; component: React.ReactNode; fixed?: boolean };
};

export const PageLayout = (props: Props) => {
  const hasSides = props.left || props.right;

  return (
    <div
      className={cn('telia-page-layout', { 'telia-page-layout--fixed-footer': props.footer?.fixed }, props.className)}
    >
      {props.navBar && (
        <div className={cn('telia-page-layout__nav-bar', props.navBar.className)}>{props.navBar.component}</div>
      )}
      <div className={cn('telia-page-layout__header', props.header?.className)}>{props.header?.component}</div>

      <div className="telia-page-layout__content">
        {hasSides && (
          <div className={cn('telia-page-layout__left', props.left?.className)}>{props.left?.component}</div>
        )}

        <div className={cn('telia-page-layout__body', props.body?.className)}>
          {props.body?.component}
          {!props.footer?.fixed && (
            <div className={cn('telia-page-layout__footer', props.footer?.className)}>{props.footer?.component}</div>
          )}
        </div>

        {hasSides && (
          <div
            className={cn(
              'telia-page-layout__right',
              { 'telia-page-layout__right--fixed': props.right?.fixed },
              props.right?.className
            )}
          >
            {props.right?.component}
          </div>
        )}
      </div>
      {props.footer?.fixed && (
        <div
          className={cn(
            'telia-page-layout__footer',
            { 'telia-page-layout__footer--fixed': props.footer.fixed },
            props.footer?.className
          )}
        >
          <div className={cn({ 'telia-page-layout__footer__content--fixed': props.footer.fixed })}>
            {props.footer?.component}
          </div>
        </div>
      )}
    </div>
  );
};
