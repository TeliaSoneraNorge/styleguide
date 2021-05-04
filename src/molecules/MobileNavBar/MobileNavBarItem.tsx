import React from 'react';
import { Icon, IconDefinition } from '../../index';
import cn from 'classnames';
import { Badge } from '../../atoms/Badge';
export interface MobileNavBarItemProps {
  onClick: () => void;
  icon: IconDefinition;
  label?: string;
  href?: string;
  active?: boolean;
  hasNotification?: boolean;
}
export const MobileNavBarItem = (props: MobileNavBarItemProps) => {
  const Tag = props.href ? 'a' : 'button';

  const clickHandler = (e: React.SyntheticEvent) => {
    if (props.href) {
      e.preventDefault();
    }
    props.onClick();
  };

  const NotificationWrapper: React.FC = ({ children }) =>
    props.hasNotification ? (
      <Badge size="compact" status="warning" kind="active">
        {children}
      </Badge>
    ) : (
      <>{children}</>
    );

  return (
    <li>
      <Tag
        className={cn('telia-mobile-nav-bar__item', {
          'telia-mobile-nav-bar__item--active': props.active,
          'telia-mobile-nav-bar__item--compact': !props.label,
        })}
        onClick={clickHandler}
        data-title={props.label}
        href={props.href}
      >
        <NotificationWrapper>
          <div className="telia-mobile-nav-bar__item__content">
            <Icon icon={props.icon} />
            {props.label ? <div className="telia-mobile-nav-bar__item__label">{props.label}</div> : null}
          </div>
        </NotificationWrapper>
      </Tag>
    </li>
  );
};
