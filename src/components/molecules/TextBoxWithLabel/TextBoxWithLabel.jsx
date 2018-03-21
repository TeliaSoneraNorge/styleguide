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
const TextBoxWithLabel = ({ labelText, type, placeholder, errorMessage, disabled, loader, loading }) =>
    <Label className={classnames('textbox-with-label', { 'textbox-with-label--with-error': errorMessage, 'textbox-with-label--with-loader': loader, 'textbox-with-label--with-loader--loading': loading })} isUsingGrayText={true}>
        <span className="textbox-with-label__label-text">{labelText}</span>
        {loader && <span className="textbox-with-label__loader">
            <span className="textbox-with-label__loader-background"/>
        </span>}
        <input className="textbox-with-label__input" type={type} placeholder={placeholder} disabled={disabled} />
        {errorMessage && <span className="input-error">{errorMessage}</span>}
    </Label>;

export default TextBoxWithLabel;