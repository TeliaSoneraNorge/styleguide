import React from 'react';
import { ModalDialog } from '@telia/styleguide';

const WithCustomFooter = () => (
    <ModalDialog
        name="info-dialog"
        heading="Info dialog"
        footerElement={<p>This is a custom footer</p>}
        standalone>
        <p>This dialog can be associated with actions where it&#39;s necessary to give the user more information.</p>
    </ModalDialog>
);

export default WithCustomFooter;