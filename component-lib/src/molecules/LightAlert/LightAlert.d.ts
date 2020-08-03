import * as React from 'react';

export interface LightAlertProps {
  title?: string;
  className?: string;
  noMargin?: boolean;
  children?: React.ReactNode;
}

export const LightAlert: React.FC<LightAlertProps>;

export default LightAlert;
