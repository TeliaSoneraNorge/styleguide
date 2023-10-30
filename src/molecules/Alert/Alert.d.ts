import * as React from 'react';

export type AlertKind = 'positive' | 'negative' | 'info' | 'warning';

export type AlertSize = 'large' | 'large-with-borders';

export type IconSize = 'small' | 'large';

export interface AlertLinks {
  text?: string;
  url?: string;
}

export interface AlertProps {
  closeButtonText?: string;
  className?: string;
  kind?: AlertKind;
  size?: AlertSize;
  iconSize?: IconSize;
  onOpen?: (...args: any[]) => any;
  onClose?: (...args: any[]) => any;
  isOpen?: boolean;
  scrollTo?: boolean;
  minimizedText?: string;
  links?: AlertLinks[];
  children?: React.ReactNode;
}

export const Alert: React.FC<AlertProps>;

export default Alert;
