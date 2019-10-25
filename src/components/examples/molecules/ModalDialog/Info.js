import React, { useState } from 'react';
import { ModalDialog, Button } from '@telia/styleguide';

export default function InfoModalDialog() {
    const [open, setOpen] = useState(false);

    return (<>
        <Button onClick={() => setOpen(true)} text="Open" />
        {open && <ModalDialog
            name="info-dialog"
            heading="Info dialog"
            submitText="Ok"
            onSubmit={() => setOpen(false)}>
            <p>This dialog can be associated with actions where it's necessary to give the user more information.</p>
        </ModalDialog>}
    </>)
};