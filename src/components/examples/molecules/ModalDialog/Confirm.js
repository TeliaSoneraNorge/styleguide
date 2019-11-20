import React from 'react';
import { ModalDialog } from '@telia/styleguide';

const ConfirmModalDialog = () => (
  <ModalDialog name="confirm-dialog" heading="Confirm dialog" submitText="Confirm" closeText="Cancel" standalone>
    <p>
      This dialog can be associated with actions where it&#39;s necessary to get the user to confirm what&#39;s about to
      happen.
    </p>
  </ModalDialog>
);

export default ConfirmModalDialog;
