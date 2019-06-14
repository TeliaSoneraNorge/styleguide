import React from 'react';
import { PopUpLine } from '@telia/styleguide';

const ConfirmationLine = () => (
    <PopUpLine
        description="Lagre endringer?"
        confirmButtonText="Lagre"
        cancelButtonText="Nei, forresten"
        isConfirmationLine />
);

export default ConfirmationLine;