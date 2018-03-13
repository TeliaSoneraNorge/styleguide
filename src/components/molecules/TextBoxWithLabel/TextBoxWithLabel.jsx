import React from 'react';
import classnames from 'classnames';
import Label from '../../atoms/Label/Label';

/**
 * Status: *in progress*.
 *
 * Be sure to set the correct type when using this component as it helps
 * the user to give correct input.
 *
**/
const TextBoxWithLabel = ({ labelText, type, placeholder, errorMessage}) =>
    <Label className={classnames('textbox-with-label', { 'textbox-with-label--with-error': errorMessage })} isUsingGrayText={true}>
        <span className="textbox-with-label__label-text">{labelText}</span>
        <input className="textbox-with-label__input" type={type} placeholder={placeholder} />
        {errorMessage && <span className="input-error">{errorMessage}</span>}
    </Label>;

export default TextBoxWithLabel;