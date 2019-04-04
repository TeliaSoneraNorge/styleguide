import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../atoms/Label/Label';

const RadioButtonWithLabel = ({ label, checked, disabled, name, value, hasRichContent, onChange, children }) =>
    <Label className="radio-button-with-label">
        <input
            className="radio-button-with-label__input"
            type="radio"
            name={name}
            checked={checked}
            onChange={onChange ? (changeEvent) => onChange(changeEvent.target.value) : null}
            disabled={disabled}
            value={value} />
        <span className="radio-button-with-label__svg-container">
            <svg className="radio-button-with-label__svg" width="20px" height="20px" viewBox="0 0 20 20">
                <circle className="radio-button-with-label__frame" cx="10" cy="10" r="9" />
                <circle className="radio-button-with-label__check-mark" cx="10" cy="10" r="5" />
            </svg>
        </span>
        <span className="radio-button-with-label__label-text">
            {hasRichContent ? children : label}
        </span>
    </Label>;
RadioButtonWithLabel.propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.any,
    /** Decides whenever should render label or children. */
    hasRichContent: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.node,
};

export default RadioButtonWithLabel;
