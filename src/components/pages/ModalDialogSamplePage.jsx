import React from 'react';

import { Header, ModalDialog } from '../../../component-lib/src/index';

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

export default class ModalDialogSamplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      infoDialogActive: false,
      confirmDialogActive: false,
      nonClosableDialogActive: false,
      toggleLongTextDialogActive: false,
    };

    this.toggleInfoModalDialog = this.toggleInfoModalDialog.bind(this);
    this.toggleConfirmModalDialog = this.toggleConfirmModalDialog.bind(this);
    this.toggleNonClosableDialog = this.toggleNonClosableDialog.bind(this);
    this.toggleLongTextDialogActive = this.toggleLongTextDialogActive.bind(this);
  }
  toggleLongTextDialogActive() {
    this.setState({ longTextDialogActive: !this.state.longTextDialogActive });
  }
  toggleInfoModalDialog() {
    this.setState({ infoDialogActive: !this.state.infoDialogActive });
  }
  toggleConfirmModalDialog() {
    this.setState({ confirmDialogActive: !this.state.confirmDialogActive });
  }
  toggleNonClosableDialog() {
    this.setState({ nonClosableDialogActive: !this.state.nonClosableDialogActive });
  }
  render() {
    return (
      <article>
        <Header iconName="ico_info" pageTitle="Modal Dialog Sample" withMask={false} withContentOverlap={false}>
          <p>See how a modal dialog works by clicking the button below!</p>
          <LongText />
        </Header>
        <section className="container container--small" style={{ textAlign: 'center' }}>
          <button className="button button-default button--margin-top" onClick={this.toggleInfoModalDialog}>
            Info modal dialog
          </button>
          {this.state.infoDialogActive && (
            <ModalDialog name="info-dialog" heading="Info dialog" onSubmit={this.toggleInfoModalDialog} submitText="Ok">
              <p>
                This dialog can be associated with actions where it&#39;s necessary to give the user more information.
              </p>
            </ModalDialog>
          )}
          <button className="button button-default button--margin-top" onClick={this.toggleConfirmModalDialog}>
            Confirm modal dialog
          </button>
          {this.state.confirmDialogActive && (
            <ModalDialog
              name="confirm-dialog"
              heading="Confirm dialog"
              onSubmit={this.toggleConfirmModalDialog}
              submitText="Confirm"
              onClose={this.toggleConfirmModalDialog}
              closeText="Cancel"
            >
              <p>
                This dialog can be associated with actions where it&#39;s necessary to get the user to confirm
                what&#39;s about to happen.
              </p>
            </ModalDialog>
          )}
          <button className="button button-default button--margin-top" onClick={this.toggleNonClosableDialog}>
            Dialog that cannot be closed by ESC key or clickout
          </button>
          {this.state.nonClosableDialogActive && (
            <ModalDialog
              name="nonclosable-dialog"
              heading="Info dialog"
              onSubmit={this.toggleNonClosableDialog}
              submitText="Ok"
            >
              <p>This dialog can&apos;t be closed by escape key or clickout</p>
            </ModalDialog>
          )}
          <button className="button button-default button--margin-top" onClick={this.toggleLongTextDialogActive}>
            Dialog with very long text
          </button>
          {this.state.longTextDialogActive && (
            <ModalDialog
              name="nonclosable-dialog"
              heading="Info dialog"
              onSubmit={this.toggleLongTextDialogActive}
              submitText="Ok"
            >
              <LongText />
              <LongText />
            </ModalDialog>
          )}
        </section>
      </article>
    );
  }
}
