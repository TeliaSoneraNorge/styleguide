import React from 'react';
import PropTypes from 'prop-types';

/**
 * Status: *in progress*.
 *
 * Work remaining: test in more browsers; use rem instead of px in the CSS.
 *
 * This component should be used when there are things that can be toggled on and off.
 * Extra `descriptionText` can be displayed below the toggle button.
 */
const ToggleButton = ({ id, labelText, descriptionText, checked = false }) =>
    <div className="toggle-button">
        <input id={id} className="toggle-button__checkbox" type="checkbox" defaultChecked={checked} />
        <label htmlFor={id} className="toggle-button__label">{labelText}</label>
        {descriptionText ? <p className="toggle-button__description">{descriptionText}</p> : null}
    </div>;

ToggleButton.propTypes = {
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    descriptionText: PropTypes.string
};

export default ToggleButton;
