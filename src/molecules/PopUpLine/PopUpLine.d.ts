import * as React from 'react';

declare interface PopUpLineProps {
  description: string;
  isConfirmationLine?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

declare const PopUpLine: React.FC<PopUpLineProps>;

export default PopUpLine;
