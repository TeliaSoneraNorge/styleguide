import React from 'react';
import Header from '../../components/molecules/Header/Header';
import ModalDialogOverlay from '../../components/molecules/ModalDialog/ModalDialogOverlay';
import ModalDialog from '../../components/molecules/ModalDialog/ModalDialog';

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
                    iconUrl="./public/icons/ico_info.svg"
                    pageTitle="Modal Dialog Sample"
                    withMask={false}
                    withContentOverlap={false}>
                    <p>See how a modal dialog works by clicking the button below!</p>
                </Header>
                <section className="container container--small" style={{ textAlign: 'center' }}>

                    <button className="button button-default button--margin-top" onClick={this.toggleInfoModalDialog}>Info modal dialog</button>
                    <ModalDialogOverlay active={this.state.infoDialogActive}>
                        <ModalDialog
                            name="info-dialog"
                            heading="Info dialog"
                            onClickButton1={this.toggleInfoModalDialog}
                            buttonText1="Ok">
                            <p>This dialog can be associated with actions where it's necessary to give the user more information.</p>
                        </ModalDialog>
                    </ModalDialogOverlay>

                    <button className="button button-default button--margin-top" onClick={this.toggleConfirmModalDialog}>Confirm modal dialog</button>
                    <ModalDialogOverlay active={this.state.confirmDialogActive}>
                        <ModalDialog
                            name="confirm-dialog"
                            heading="Confirm dialog"
                            onClickButton1={this.toggleConfirmModalDialog}
                            buttonText1="Confirm"
                            onClickButton2={this.toggleConfirmModalDialog}
                            buttonText2="Cancel">
                            <p>This dialog can be associated with actions where it's necessary to get the user to confirm what's about to happen.</p>
                        </ModalDialog>
                    </ModalDialogOverlay>

                </section>
            </article>
        );
    }
}