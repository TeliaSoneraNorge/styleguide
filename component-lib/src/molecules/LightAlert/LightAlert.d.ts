import * as React from 'react';

export interface LightAlertProps {
  title?: string;
  className?: string;
  noMargin?: boolean;
  children?: React.ReactNode;
}

const LightAlert: React.FC<LightAlertProps>;

export default LightAlert;
