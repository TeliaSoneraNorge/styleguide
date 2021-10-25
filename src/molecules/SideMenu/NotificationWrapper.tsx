import React from 'react';
import cn from 'classnames';
import { Badge } from '../../atoms/Badge';

type Props = {
  hasNotification?: boolean;
  numberOfNotifications?: number;
  position?: 'right' | 'on-top-left';
};

export const NotificationWrapper: React.FC<Props> = ({
  hasNotification,
  numberOfNotifications,
  position = 'right',
  children,
}) => {
  const classNames = cn(
    'telia-side-menu-item__badge',
    { 'telia-side-menu-item__badge--right': position === 'right' },
    { 'telia-side-menu-item__badge--on-top-left': position === 'on-top-left' }
  );
  if (numberOfNotifications) {
    return (
      <Badge className={classNames} status="warning" kind="active" text={`${numberOfNotifications}`}>
        {children}
      </Badge>
    );
  } else if (hasNotification) {
    return (
      <>
        {children}
        <Badge className={classNames} size="compact" status="warning" kind="active" />
      </>
    );
  }
  return <>{children} </>;
};
