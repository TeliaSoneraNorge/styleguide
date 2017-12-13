import _ from 'lodash';
import React from 'react';

import Label from '../../atoms/Label/Label';

/**
 * Status: *in progress*.
 *
 * Waiting on the Photoshop files to get the exact checkmark SVG.
 */
const RadioButtonWithLabel = ({ label, checked, name }) =>
    <Label className="radio-button-with-label" mode="text-to-right">
        <input className="radio-button-with-label__input" type="radio" name={name} defaultChecked={checked} />
        <span className="radio-button-with-label__svg-container">
            <svg className="radio-button-with-label__svg" width="20px" height="20px" viewBox="0 0 20 20">
                <circle className="radio-button-with-label__frame" cx="10" cy="10" r="9"/>
                <circle className="radio-button-with-label__check-mark" cx="10" cy="10" r="5"/>
            </svg>
        </span>
        <span className="radio-button-with-label__label-text">{label}</span>
    </Label>;

export default RadioButtonWithLabel;
