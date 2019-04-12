import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Label from '../../atoms/Label/Label';

/**
 * Status: *finished*.
 * Category: FormElements
 **/
const TextAreaWithLabel = ({ labelText, placeholder, error, disabled, ...rest }) =>
    <Label className="textarea-with-label" isUsingGrayText={true}>
        <span className="textarea-with-label__label-text">{labelText}</span>
        <textarea
            className={classnames('textarea', 'textarea--white', { 'textarea--with-error': error })}
            placeholder={placeholder}
            disabled={disabled}
            {...rest} />
        {error && <span className="input-error">{error}</span>}
    </Label>;

TextAreaWithLabel.propTypes = {
    labelText: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    disabled: PropTypes.bool,
};

export default TextAreaWithLabel;