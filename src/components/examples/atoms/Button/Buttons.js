import React from 'react';
import { Button } from 'component-lib';

const Buttons = () => (
    <div>
        <Button text="Default button" />
        <Button text="Primary button" kind="primary" />
        <Button text="Disabled button" isDisabled={true} />
        <br /><br />
        <Button text="Default button" size="small" />
        <Button text="Primary button" kind="primary" size="small" />
        <Button text="Disabled button" isDisabled={true} size="small" />
        <br /><br />
        <Button text="Default button" isProcessing={true} processingText="Working" />
        <Button text="Default button" isProcessing={true} processingText="Working" kind="primary" />
        <br /><br />
        <Button text="Confirm" />
        <Button text="Cancel button" kind="cancel" />
        <Button text="Inverted button" kind="inverted" />
        <br /><br />
        <Button text="Link button" kind="link" />
    </div>
);

export default Buttons;