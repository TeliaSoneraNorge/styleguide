import React from 'react';
import { ModalDialog } from '@telia/styleguide';

const WithCustomHeader = () => (
  <ModalDialog
    name="info-dialog"
    submitText="Ok"
    headerElement={
      <section id={`${name}-heading`}>
        <h2 className="modal-dialog__heading">Custom header</h2>
        <p>Some subtitle</p>
      </section>
    }
    standalone
  >
    <p>This dialog can be associated with actions where it&#39;s necessary to give the user more information.</p>
  </ModalDialog>
);

export default WithCustomHeader;
