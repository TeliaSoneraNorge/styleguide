import React, { useState } from 'react';
import { QuantityPicker } from '@telia/styleguide';

const DefaultQuantityPicker = () => {
    const [quantity, setQuantity] = useState(2);
    
    return (
        <QuantityPicker quantity={quantity} onChangeQuantity={(quantity) => setQuantity(quantity)} minQuantity={2} maxQuantity={8} />
    );
};

export default DefaultQuantityPicker;