import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PANEL = {
    LEFT: 'left',
    RIGHT: 'right'
};

/**
 * Status: *In progress*.
 * Category: FormElements
 */
const ToggleSwitch = ({ leftLabel, rightLabel, leftOnClickHandler, rightOnClickHandler, active, backgroundColor, className }) => (
    <div
        className={classnames('toggle-switch', {
            [`toggle-switch__${backgroundColor}`]: true,
            [className]: className
        })}
        role="group">
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
    rightOnClickHandler: () => {},
    backgroundColor: 'white'
};

ToggleSwitch.propTypes = {
    active: PropTypes.oneOf(Object.keys(PANEL).map(k => PANEL[k])),
    backgroundColor: PropTypes.oneOf(['white', 'grey']),
    className: PropTypes.string,
    leftLabel: PropTypes.string,
    rightLabel: PropTypes.string,
    leftOnClickHandler: PropTypes.func,
    rightOnClickHandler: PropTypes.func
};

export default ToggleSwitch;
