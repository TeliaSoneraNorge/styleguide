import * as React from 'react';

export interface QuantityButtonProps {
  icon?: string;
  isDisabled?: boolean;
  onClick?: (...args: any[]) => any;
  text?: string;
}

const QuantityButton: React.FC<QuantityButtonProps>;

export default QuantityButton;
