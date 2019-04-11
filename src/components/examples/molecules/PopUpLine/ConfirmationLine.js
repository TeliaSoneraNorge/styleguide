import React from 'react';
import { PopUpLine } from 'component-lib';

const ConfirmationLine = () => (
    <PopUpLine
        description="Lagre endringer?"
        confirmButtonText="Lagre"
        cancelButtonText="Nei, forresten"
        isConfirmationLine />
);

export default ConfirmationLine;