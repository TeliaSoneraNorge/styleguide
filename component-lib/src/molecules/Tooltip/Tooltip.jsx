import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
/**
 * This tooltip is implemented with the purpose of having to open/close it by clicking or using keyboard,
 * but the behavior is not implemented as a part of the styleguide.
 **/
export default class Tooltip extends Component {
    static propTypes = {
        label: PropTypes.node,
        text: PropTypes.string,
        isExpanded: PropTypes.bool,
    };
    buttonId = _.uniqueId('tooltip-button-');
    tooltipBoxId = _.uniqueId('tooltip-box-');
    render() {
        const { label, text, isExpanded, onClick, isUsingGrayText, className } = this.props;
        return (
            <div className={classnames('tooltip', {
                'tooltip--show': isExpanded,
                'tooltip--gray-text': isUsingGrayText,
                [className]: className
            })}>
                <div className="tooltip__button-container">
                    {label
                        ? <span>{label}<button id={this.buttonId} className="tooltip__button" aria-controls={this.tooltipBoxId} aria-expanded={isExpanded} onClick={onClick}>i</button></span>
                        : <button id={this.buttonId} className="tooltip__button" aria-controls={this.tooltipBoxId} aria-expanded={isExpanded} onClick={onClick}>i</button>
                    }
                </div>
                <div className="tooltip__box" id={this.tooltipBoxId}>
                    {text}
                </div>
            </div>
        );
    }
}
