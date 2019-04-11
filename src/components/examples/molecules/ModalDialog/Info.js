import React from 'react';
import { ModalDialog } from 'component-lib';

const InfoModalDialog = () => (
    <ModalDialog
        name="info-dialog"
        heading="Info dialog"
        buttonText1="Ok">
        <p>This dialog can be associated with actions where it's necessary to give the user more information.</p>
    </ModalDialog>
);

export default InfoModalDialog;