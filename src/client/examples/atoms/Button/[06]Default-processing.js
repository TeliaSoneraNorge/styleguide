import React from 'react';
import { Button } from '@telia/styleguide';

const DefaultProcessingButton = () => (
    <Button text="Default button" isProcessing={true} processingText={'Working'} />
);

export default DefaultProcessingButton;