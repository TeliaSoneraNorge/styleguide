import React from 'react';
import { Badge } from '../../atoms/Badge';

type Props = {
  hasNotification?: boolean;
};

export const NotificationWrapper: React.FC<Props> = ({ hasNotification, children }) =>
  hasNotification ? (
    <Badge className="telia-side-menu-item__badge" size="compact" status="warning" kind="active">
      {children}
    </Badge>
  ) : (
    <>{children} </>
  );
