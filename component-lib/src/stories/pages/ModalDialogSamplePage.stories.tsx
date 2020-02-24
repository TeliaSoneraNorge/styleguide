import React, { useState } from 'react';

import { Header, ModalDialog } from '../../index';

export default {
  title: 'Examples|Pages',
};

const LongText = () => (
  <>
    <p>
      Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor
      lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
      neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Praesent sapien massa,
      convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Cras ultricies ligula sed magna dictum
      porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus.
    </p>
    <p>
      Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor
      lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
      neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Praesent sapien massa,
      convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Cras ultricies ligula sed magna dictum
      porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus.
    </p>
    <p>
      Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor
      lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
      neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Praesent sapien massa,
      convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Cras ultricies ligula sed magna dictum
      porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus.
    </p>
    <p>
      Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor
      lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
      neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Praesent sapien massa,
      convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Cras ultricies ligula sed magna dictum
      porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus.
    </p>
  </>
);

export const ModalDialogSamplePage = () => {
  const [infoDialogActive, setInfoDialogActive] = useState(false);
  const [confirmDialogActive, setConfirmDialogActive] = useState(false);
  const [nonClosableDialogActive, setNonClosableDialogActive] = useState(false);
  const [longTextDialogActive, setLongTextDialogActive] = useState(false);

  function toggleLongTextDialogActive() {
    setLongTextDialogActive(p => !p);
  }

  function toggleInfoModalDialog() {
    setInfoDialogActive(p => !p);
  }

  function toggleConfirmModalDialog() {
    setConfirmDialogActive(p => !p);
  }

  function toggleNonClosableDialog() {
    setNonClosableDialogActive(p => !p);
  }

  return (
    <article>
      <Header iconName="ico_info" pageTitle="Modal Dialog Sample" withMask={false} withContentOverlap={false}>
        <p>See how a modal dialog works by clicking the button below!</p>
        <LongText />
      </Header>

      <section className="container container--small" style={{ textAlign: 'center' }}>
        <button className="button button-default button--margin-top" onClick={toggleInfoModalDialog}>
          Info modal dialog
        </button>

        {infoDialogActive && (
          <ModalDialog name="info-dialog" heading="Info dialog" onSubmit={toggleInfoModalDialog} submitText="Ok">
            <p>
              This dialog can be associated with actions where it&#39;s necessary to give the user more information.
            </p>
          </ModalDialog>
        )}

        <button className="button button-default button--margin-top" onClick={toggleConfirmModalDialog}>
          Confirm modal dialog
        </button>

        {confirmDialogActive && (
          <ModalDialog
            name="confirm-dialog"
            heading="Confirm dialog"
            onSubmit={toggleConfirmModalDialog}
            submitText="Confirm"
            onClose={toggleConfirmModalDialog}
            closeText="Cancel"
          >
            <p>
              This dialog can be associated with actions where it&#39;s necessary to get the user to confirm what&#39;s
              about to happen.
            </p>
          </ModalDialog>
        )}

        <button className="button button-default button--margin-top" onClick={toggleNonClosableDialog}>
          Dialog that cannot be closed by ESC key or clickout
        </button>

        {nonClosableDialogActive && (
          <ModalDialog
            name="nonclosable-dialog"
            heading="Info dialog"
            onSubmit={toggleNonClosableDialog}
            submitText="Ok"
          >
            <p>This dialog can&apos;t be closed by escape key or clickout</p>
          </ModalDialog>
        )}
        <button className="button button-default button--margin-top" onClick={toggleLongTextDialogActive}>
          Dialog with very long text
        </button>

        {longTextDialogActive && (
          <ModalDialog
            name="nonclosable-dialog"
            heading="Info dialog"
            onSubmit={toggleLongTextDialogActive}
            submitText="Ok"
          >
            <LongText />
            <LongText />
          </ModalDialog>
        )}
      </section>
    </article>
  );
};
