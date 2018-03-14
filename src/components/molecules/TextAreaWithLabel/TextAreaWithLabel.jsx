import React from 'react';
import classnames from 'classnames';
import Label from '../../atoms/Label/Label';

/**
 * Status: *finished*.
 **/
const TextAreaWithLabel = ({ labelText, placeholder, error, disabled }) =>
    <Label className="text-area-with-label" isUsingGrayText={true}>
        <span className="text-area-with-label__label-text">{labelText}</span>
        <textarea
            className={classnames('text-area', 'text-area--white', { 'text-area--with-error': error })}
            placeholder={placeholder}
            disabled={disabled}/>
        {error && <span className="input-error">{error}</span>}
    </Label>;

export default TextAreaWithLabel;