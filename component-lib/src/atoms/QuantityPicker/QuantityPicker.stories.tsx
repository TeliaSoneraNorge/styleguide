import React, { useState } from 'react';
import QuantityPicker from './QuantityPicker';

export default {
  title: 'Component library/Atoms/Quantity Picker',
  component: QuantityPicker,
};

export const Default = () => {

  const [quantity, setQuantity] = useState(2);

  return (
    <QuantityPicker
      quantity={quantity}
      onChangeQuantity={(quantity: any) => setQuantity(quantity)}
      minQuantity={2}
      maxQuantity={8}
    />
  );
};