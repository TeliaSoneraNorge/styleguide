import React from 'react';
import { ModalDialog } from '@telia/styleguide';

const ConfirmModalDialog = () => (
    <ModalDialog
        name="confirm-dialog"
        heading="Confirm dialog"
        buttonText1="Confirm"
        buttonText2="Cancel">
        <p>This dialog can be associated with actions where it's necessary to get the user to confirm what's about to happen.</p>
    </ModalDialog>
);

export default ConfirmModalDialog;