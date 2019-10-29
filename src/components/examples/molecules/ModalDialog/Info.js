import React from 'react';
import { ModalDialog } from '@telia/styleguide';

const InfoModalDialog = () => (
    <ModalDialog
        name="info-dialog"
        heading="Info dialog"
        submitText="Ok"
        standalone>
        <p>This dialog can be associated with actions where it's necessary to give the user more information.</p>
    </ModalDialog>
);

export default InfoModalDialog;