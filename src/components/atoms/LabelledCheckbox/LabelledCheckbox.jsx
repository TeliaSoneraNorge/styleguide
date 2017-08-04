import React from 'react';
import PropTypes from 'prop-types';

/**
 * Status: *in progress*.
 *
 * Work remaining: test in more browsers; use rem instead of px in the CSS.
 *
 * This component should be used whenever you would normally use a checkbox.
 * Extra `descriptionText` can be displayed below the label/checkbox.
 */
const LabelledCheckbox = ({ id, labelText, descriptionText, checked = false }) =>
    <div className="labelled-checkbox">
        <input id={id} className="labelled-checkbox__checkbox" type="checkbox" defaultChecked={checked} />
        <label htmlFor={id} className="labelled-checkbox__label">{labelText}</label>
        {descriptionText ? <p className="labelled-checkbox__description">{descriptionText}</p> : null}
    </div>;

LabelledCheckbox.propTypes = {
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    descriptionText: PropTypes.string
};

export default LabelledCheckbox;
