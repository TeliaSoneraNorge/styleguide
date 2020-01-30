import * as React from 'react';

export interface ModalDialogProps {
  name: string;
  heading?: string;
  children?: React.ReactNode;
  onSubmit?: (...args: any[]) => any;
  submitText?: string;
  onClose?: (...args: any[]) => any;
  closeText?: string;
  standalone?: boolean;
  renderTo?: any;
  headerElement?: React.ReactElement<any>;
  footerElement?: React.ReactElement<any>;
  disableOverlayClick?: React.ReactNode;
  disableCloseByEscKey?: React.ReactNode;
}

const ModalDialog: React.FC<ModalDialogProps>;

export default ModalDialog;

const renderDialog: React.FC;

export default renderDialog;
