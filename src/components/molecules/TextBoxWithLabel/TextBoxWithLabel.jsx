import React from 'react';

import Label from '../../atoms/Label/Label';

/**
 * Status: *in progress*.
 *
 * Be sure to set the correct type when using this component as it helps
 * the user to give correct input.
 *
**/
const TextBoxWithLabel = ({ label, type, placeholder}) =>
    <Label className="textbox-with-label" mode="text-on-top">
        <span className="textbox-with-label__label-text">{label}</span>
        <input className="textbox-with-label__input" type={type} placeholder={placeholder} />
    </Label>;

export default TextBoxWithLabel;