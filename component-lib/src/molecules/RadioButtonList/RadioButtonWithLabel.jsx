import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../atoms/Label/Label';

const RadioButtonWithLabel = ({ label, checked, name, value, hasRichContent, children }) =>
    <Label className="radio-button-with-label">
        <input
            className="radio-button-with-label__input"
            type="radio"
            name={name}
            defaultChecked={checked}
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
    name: PropTypes.string,
    value: PropTypes.any,
    /** Decides whenever should render label or children. */
    hasRichContent: PropTypes.bool,
    children: PropTypes.node,
};

export default RadioButtonWithLabel;
