import React from 'react';
import PropTypes from 'prop-types';

import Alert from '../Alert/Alert';

export default class StatefulAlert extends React.Component {
    static propTypes = {
        kind: PropTypes.oneOf(['positive', 'negative', 'info', 'warning']),
        size: PropTypes.oneOf(['large']),
        onOpen: PropTypes.func,
        onClose: PropTypes.func,
        minimizedText: PropTypes.string,
        links: PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string,
                url: PropTypes.string
            })
        ),
    };
    state = { isOpen: true };

    onClose = () => {
        this.setState({ isOpen: false });

        if (this.props.onOpen) {
            this.props.onOpen();
        }
    };

    onOpen = () => {
        this.setState({ isOpen: true });

        if (this.props.onOpen) {
            this.props.onOpen();
        }
    };

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