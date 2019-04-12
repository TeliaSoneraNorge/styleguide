import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

/**
 * Status: *in progress*.
 * Category: FormElements
 *
 * Work remaining: test in more browsers; use rem instead of px in the CSS.
 *
 * This component should be used when there are things that can be toggled on and off.
 * Extra `descriptionText` can be displayed below the toggle button.
 */
const ToggleButton = ({ id, labelText, descriptionText, defaultChecked = false, checked, onChange, toggleOnLeftSide = false }) => (
    <div className={cn('toggle-button', {
        'left-side': toggleOnLeftSide,
        'right-side': !toggleOnLeftSide
    })}>
        <input id={id} className="toggle-button__checkbox" type="checkbox" onChange={onChange} checked={checked} defaultChecked={defaultChecked} />
        <label htmlFor={id} className="toggle-button__label">{labelText}</label>
        {descriptionText ? <p className="toggle-button__description">{descriptionText}</p> : null}
    </div>
);

ToggleButton.propTypes = {
    defaultChecked: PropTypes.bool,
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    descriptionText: PropTypes.string,
    toggleOnLeftSide: PropTypes.bool
};

export default ToggleButton;
