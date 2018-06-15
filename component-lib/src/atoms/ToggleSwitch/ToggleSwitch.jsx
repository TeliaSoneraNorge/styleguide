import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PANEL = {
    LEFT: 'left',
    RIGHT: 'right'
};

/**
 * Status: *In progress*.
 */
const ToggleSwitch = ({ leftLabel, rightLabel, leftOnClickHandler, rightOnClickHandler, active }) => (
    <div className="toggle-switch" role="group">
        <button
            type="button"
            aria-pressed={active === PANEL.LEFT}
            className="toggle-switch__button"
            onClick={leftOnClickHandler}>
            {leftLabel}
        </button>
        <button
            type="button"
            aria-pressed={active === PANEL.RIGHT}
            className="toggle-switch__button"
            onClick={rightOnClickHandler}>
            {rightLabel}
        </button>
    </div>
);

ToggleSwitch.defaultProps = {
    leftOnClickHandler: () => {},
    rightOnClickHandler: () => {}
};

ToggleSwitch.propTypes = {
    active: PropTypes.oneOf(Object.values(PANEL)),
    leftLabel: PropTypes.string,
    rightLabel: PropTypes.string,
    leftOnClickHandler: PropTypes.func,
    rightOnClickHandler: PropTypes.func
};

export default ToggleSwitch;
