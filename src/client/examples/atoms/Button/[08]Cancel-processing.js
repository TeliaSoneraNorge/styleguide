import React from 'react';
import { Button } from '@telia/styleguide';

const CancelProcessingButton = () => (
    <Button text="Default button" isProcessing={true} processingText={'Cancelling'} kind="cancel" />
);

export default CancelProcessingButton;