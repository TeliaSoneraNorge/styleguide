import * as React from 'react';

export interface PopUpLineProps {
  description: string;
  isConfirmationLine?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

const PopUpLine: React.FC<PopUpLineProps>;

export default PopUpLine;
