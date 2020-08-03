import * as React from 'react';

export interface QuantityPickerProps {
  onChangeQuantity?: (...args: any[]) => any;
  quantity: number;
  minQuantity?: number;
  maxQuantity?: number;
  addText?: string;
  reduceText?: string;
  quantityLabel?: string;
}

export const QuantityPicker: React.FC<QuantityPickerProps>;

export default QuantityPicker;
