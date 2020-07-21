import * as React from 'react';
import { ButtonKind } from "../../atoms/Button";
import { ContainerSize } from "../../atoms/Container";

interface ProductModalDialogVariant {
    color: string;
    name: string;
    id: string;
    src: string;
    price: string | number;
}

export interface ProductModalDialogProps {
  name: string;
  heading: string;
  description?: string;
  variants: ProductModalDialogVariant[];
  selected: ProductModalDialogVariant;
  onSelect: (...args: any[]) => any;
  onSubmit: (...args: any[]) => any;
  submitDisabled?: boolean;
  submitText: string;
  onClose?: (...args: any[]) => any;
  standalone?: boolean;
  renderTo?: any;
}

const ProductModalDialog: React.FC<ProductModalDialogProps>;

export default ProductModalDialog;

const renderDialog: React.FC;

export default renderDialog;
