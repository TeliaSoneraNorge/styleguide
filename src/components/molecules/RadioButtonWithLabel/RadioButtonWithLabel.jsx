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
                <path className="radio-button-with-label__frame" d="M16,19H4c-1.7,0-3-1.4-3-3V4c0-1.7,1.3-3,3-3h12c1.6,0,3,1.3,3,3v12C19,17.6,17.6,19,16,19z"/>
                <path className="radio-button-with-label__check-mark" d="M5,7.7c1.5,2.4,3.1,4.8,4.6,7.3c2.1-3.3,4.3-6.7,6.4-10"/>
            </svg>
        </span>
        <span className="radio-button-with-label__label-text">{label}</span>
    </Label>;

export default RadioButtonWithLabel;
