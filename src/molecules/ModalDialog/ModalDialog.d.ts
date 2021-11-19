import * as React from 'react';
import { ButtonKind } from '../../atoms/Button';
import { ContainerSize } from '../../atoms/Container';

declare interface ModalDialogProps {
  name: string;
  heading?: string;
  children?: React.ReactNode;
  onSubmit?: (...args: any[]) => any;
  submitDisabled?: boolean;
  submitText?: string;
  submitKind?: ButtonKind;
  onClose?: (...args: any[]) => any;
  closeText?: string;
  closeKind?: ButtonKind;
  standalone?: boolean;
  focusChildElement?: boolean;
  renderTo?: any;
  headerElement?: React.ReactElement<any>;
  footerElement?: React.ReactElement<any>;
  size?: ContainerSize;
  className?: string;
}

declare const ModalDialog: React.FC<ModalDialogProps>;

export default ModalDialog;
