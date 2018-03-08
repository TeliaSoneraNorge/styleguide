import React from 'react';

import Label from '../../atoms/Label/Label';

/**
 * Status: *finished*.
 **/
const TextAreaWithLabel = ({ labelText, placeholder }) =>
    <Label className="text-area-with-label" isUsingGrayText={true}>
        <span className="text-area-with-label__label-text">{labelText}</span>
        <textarea className="text-area text-area--white" placeholder={placeholder}></textarea>
    </Label>;

export default TextAreaWithLabel;