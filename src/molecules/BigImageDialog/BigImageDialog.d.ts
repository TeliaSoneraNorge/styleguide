import * as React from 'react';

export interface BigImageDialogProps {
  name: string;
  heading: string;
  topHeading: string;
  description?: string;
  src: string;
  children: React.ReactNode;
  onClose?: () => void;
  standalone?: boolean;
  renderTo?: React.ReactNode;
}

declare const BigImageDialog: React.FC<BigImageDialogProps>;

export default BigImageDialog;
