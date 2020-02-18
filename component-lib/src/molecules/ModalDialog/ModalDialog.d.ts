import * as React from 'react';
import {ButtonKind} from "../../atoms/Button";
import {ContainerSize} from "../../atoms/Container";

export interface ModalDialogProps {
  name: string;
  heading?: string;
  children?: React.ReactNode;
  onSubmit?: (...args: any[]) => any;
  submitText?: string;
  submitKind?: ButtonKind;
  onClose?: (...args: any[]) => any;
  closeText?: string;
  closeKind?: ButtonKind;
  standalone?: boolean;
  renderTo?: any;
  headerElement?: React.ReactElement<any>;
  footerElement?: React.ReactElement<any>;
  size?: ContainerSize;
}

const ModalDialog: React.FC<ModalDialogProps>;

export default ModalDialog;

const renderDialog: React.FC;

export default renderDialog;
