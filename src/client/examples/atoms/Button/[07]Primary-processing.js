import React from 'react';
import { Button } from '@telia/styleguide';

const PrimaryProcessingButton = () => (
    <Button text="Default button" isProcessing={true} processingText="Working" kind="primary" />
);

export default PrimaryProcessingButton;