import React, { useState } from 'react';
import { ModalDialog, Button } from '@telia/styleguide';

export default function ConfirmModalDialog() {
    const [open, setOpen] = useState(false);

    return (<>
        <Button onClick={() => setOpen(true)} text="Open" />
        {open && <ModalDialog
            name="confirm-dialog"
            heading="Confirm dialog"
            submitText="Confirm"
            onSubmit={() => setOpen(false)}
            closeText="Cancel"
            onClose={() => setOpen(false)}>
            <p>This dialog can be associated with actions where it's necessary to get the user to confirm what's about to happen.</p>
        </ModalDialog>}
    </>)
};