import React, { useState } from 'react';
import Header from '../Header';
import ModalDialog from './ModalDialog';
import ModalDialogProvider from './ModalDialogProvider';

export default {
  title: 'Component library/Molecules/ModalDialog',
  component: ModalDialog,
};

export const Default = () => {
  const [infoDialogActive, setInfoDialogActive] = useState(false);

  const toggleInfoModalDialog = () => {
    setInfoDialogActive(!infoDialogActive);
  };

  return (
    <ModalDialogProvider>
      <ModalDialog
        name="info-dialog"
        heading="Info dialog"
        submitText="Ok"
        onSubmit={toggleInfoModalDialog}
        standalone // <– 'standalone' are only used for example purposes. See example further down ...
      >
        This dialog can be associated with actions where it&#39;s necessary to give the user more information.
      </ModalDialog>
    </ModalDialogProvider>
  );
};

export const DialogWithLinkCancel = () => {
  const [dialogWithLinkActive, setDialogWithLinkActive] = useState(false);

  const toggleDialogWithLink = () => {
    setDialogWithLinkActive(!dialogWithLinkActive);
  };

  return (
    <ModalDialogProvider>
      <ModalDialog
        name="dialog-with-link"
        heading="Dialog with link test"
        submitText="Ja TAKK"
        onSubmit={toggleDialogWithLink}
        onClose={() => {}}
        closeKind="cancel"
        closeText="Cancel"
        standalone
      >
        This dialog can be associated with actions where it&#39;s necessary to give the user more information.
      </ModalDialog>
    </ModalDialogProvider>
  );
};

export const ConfirmModalDialog = () => {
  const [confirmDialogActive, setConfirmDialogActive] = useState(false);

  const toggleConfirmModalDialog = () => {
    setConfirmDialogActive(!confirmDialogActive);
  };

  return (
    <ModalDialogProvider>
      <ModalDialog
        name="confirm-dialog"
        heading="Confirm dialog"
        onSubmit={toggleConfirmModalDialog}
        submitText="Confirm"
        submitKind="inverted"
        onClose={toggleConfirmModalDialog}
        closeKind="normal"
        closeText="Cancel"
        standalone // <– 'standalone' are only used for example purposes. See example further down ...
      >
        This dialog can be associated with actions where it&#39;s necessary to get the user to confirm what&#39;s about
        to happen.
      </ModalDialog>
    </ModalDialogProvider>
  );
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

export const Example = () => {
  const [infoDialogActive, setInfoDialogActive] = useState(false);
  const [dialogWithLinkActive, setDialogWithLinkActive] = useState(false);

  const [confirmDialogActive, setConfirmDialogActive] = useState(false);
  const [nonClosableDialogActive, setNonClosableDialogActive] = useState(false);
  const [longTextDialogActive, setLongTextDialogActive] = useState(false);

  const toggleInfoModalDialog = () => {
    setInfoDialogActive(!infoDialogActive);
  };

  const toggleDialogWithLink = () => {
    setDialogWithLinkActive(!dialogWithLinkActive);
  };
  const toggleConfirmModalDialog = () => {
    setConfirmDialogActive(!confirmDialogActive);
  };
  const toggleNonClosableDialog = () => {
    setNonClosableDialogActive(!nonClosableDialogActive);
  };
  const toggleLongTextDialogActive = () => {
    setLongTextDialogActive(!longTextDialogActive);
  };

  return (
    <ModalDialogProvider>
      <article>
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
          <button className="button button-default button--margin-top" onClick={toggleDialogWithLink}>
            Dialog with Link
          </button>
          {dialogWithLinkActive && (
            <ModalDialog
              name="dialog-with-link"
              heading="Dialog with Link"
              onSubmit={toggleDialogWithLink}
              submitText="Ja TAKK"
            >
              Link in Dialog
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
                This dialog can be associated with actions where it&#39;s necessary to get the user to confirm
                what&#39;s about to happen.
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

        <Header iconName="ico_info" pageTitle="Modal Dialog Sample" withMask={false} withContentOverlap={false}>
          <p>See how a modal dialog works by clicking the button below!</p>
          <LongText />
        </Header>
      </article>
    </ModalDialogProvider>
  );
};
