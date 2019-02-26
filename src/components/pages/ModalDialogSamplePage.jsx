import React from 'react';

import { Header, ModalDialogOverlay, ModalDialog } from '../../../component-lib/src/index';

export default class ModalDialogSamplePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            infoDialogActive: false,
            confirmDialogActive: false
        };

        this.toggleInfoModalDialog = this.toggleInfoModalDialog.bind(this);
        this.toggleConfirmModalDialog = this.toggleConfirmModalDialog.bind(this);
    }
    toggleInfoModalDialog() {
        this.setState({ infoDialogActive: !this.state.infoDialogActive });
    }
    toggleConfirmModalDialog() {
        this.setState({ confirmDialogActive: !this.state.confirmDialogActive });
    }
    render() {
        return (
            <article>
                <Header
                    iconName="ico_info"
                    pageTitle="Modal Dialog Sample"
                    withMask={false}
                    withContentOverlap={false}>
                    <p>See how a modal dialog works by clicking the button below!</p>
                    <p>
                        Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor
                        volutpat. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
                        amet ligula. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Vivamus
                        magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus.
                    </p>
                    <p>
                        Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor
                        volutpat. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
                        amet ligula. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Vivamus
                        magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus.
                    </p>
                    <p>
                        Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor
                        volutpat. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
                        amet ligula. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Vivamus
                        magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus.
                    </p>
                    <p>
                        Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor
                        volutpat. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
                        amet ligula. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Vivamus
                        magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus.
                    </p>
                </Header>
                <section className="container container--small" style={{ textAlign: 'center' }}>
                    <button
                        className="button button-default button--margin-top"
                        onClick={this.toggleInfoModalDialog}>
                        Info modal dialog
                    </button>
                    <ModalDialogOverlay active={this.state.infoDialogActive}>
                        <ModalDialog
                            name="info-dialog"
                            heading="Info dialog"
                            onClickButton1={this.toggleInfoModalDialog}
                            buttonText1="Ok">
                            <p>This dialog can be associated with actions where it's necessary to give the user more information.</p>
                        </ModalDialog>
                    </ModalDialogOverlay>
                    <button
                        className="button button-default button--margin-top"
                        onClick={this.toggleConfirmModalDialog}>
                        Confirm modal dialog
                    </button>
                    <ModalDialogOverlay active={this.state.confirmDialogActive}>
                        <ModalDialog
                            name="confirm-dialog"
                            heading="Confirm dialog"
                            onClickButton1={this.toggleConfirmModalDialog}
                            buttonText1="Confirm"
                            onClickButton2={this.toggleConfirmModalDialog}
                            buttonText2="Cancel">
                            <p>
                                This dialog can be associated with actions where it's necessary to get the user to
                                confirm what's about to happen.
                            </p>
                        </ModalDialog>
                    </ModalDialogOverlay>
                </section>
            </article>
        );
    }
}