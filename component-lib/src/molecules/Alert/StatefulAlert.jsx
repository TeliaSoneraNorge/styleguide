import React from 'react';
import Alert from './Alert';

export default class StatefulAlert extends React.Component {
    constructor() {
        super();

        this.state = { isOpen: true };
        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.setState({ isOpen: false });

        if (this.props.onOpen) {
            this.props.onOpen();
        }
    }

    onOpen() {
        this.setState({ isOpen: true });

        if (this.props.onOpen) {
            this.props.onOpen();
        }
    }

    render() {
        return (
            <Alert
                {...this.props}
                onOpen={this.onOpen}
                onClose={this.onClose}
                isOpen={this.state.isOpen} />
        );
    }
};