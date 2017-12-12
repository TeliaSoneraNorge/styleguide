import _ from 'lodash';
import React from 'react';

import Label from '../../atoms/Label/Label';

/**
 * Status: *in progress*.
 * 
 * Waiting on the Photoshop files to get the exact checkmark SVG.
 */
const CheckBoxWithLabel = ({ label, checked }) =>
    <Label className="check-box-with-label" mode="text-to-right">
        <input className="check-box-with-label__input" type="checkbox" defaultChecked={checked} />
        <span className="check-box-with-label__background-frame">
            <svg className="check-box-with-label__svg" width="20px" height="20px" viewBox="0 0 20 20">
                <path className="check-box-with-label__check-mark" d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                <polyline className="check-box-with-label__foreground-frame" points="4 11 8 15 16 6"></polyline>
            </svg>
        </span>
        <span className="check-box-with-label__label-text">{label}</span>
    </Label>;

export default CheckBoxWithLabel;
