import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tooltip from './Tooltip';

/**
 * This tooltip is implemented with the purpose of having to open/close it by clicking or using keyboard.
 **/
export default class StatefulTooltip extends Component {
    static propTypes = {
        label: PropTypes.node.isRequired,
        text: PropTypes.string.isRequired,
        isUsingGrayText: PropTypes.bool,
    };

    state = {
        isExpanded: false,
    };

    handleOnClick = () => {
        this.setState({
            isExpanded: !this.state.isExpanded,
        });
    };

    render() {
        return <Tooltip {...this.state} {...this.props} onClick={this.handleOnClick} />;
    }
}
