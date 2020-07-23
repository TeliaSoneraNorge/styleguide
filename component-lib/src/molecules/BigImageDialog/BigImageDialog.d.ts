import * as React from 'react';

export interface BigImageDialogProps {
  name: string;
  heading: string;
  description?: string;
  src: string;
  children: React.ReactNode;
  onClose?: (...args: any[]) => any;
  standalone?: boolean;
  renderTo?: any;
}

const BigImageDialog: React.FC<BigImageDialogProps>;

export default BigImageDialog;
