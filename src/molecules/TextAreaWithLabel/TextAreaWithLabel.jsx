import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Label from '../../atoms/Label/Label';

/**
 * Status: *finished*.
 * Category: FormElements
 **/
const TextAreaWithLabel = ({ labelText, hideLabel, placeholder, error, disabled, ...rest }) => (
  <Label className="textarea-with-label" isUsingGrayText={true}>
    <span className={classnames('textarea-with-label__label-text', { 'sr-only': hideLabel })}>{labelText}</span>
    <textarea
      className={classnames('textarea', 'textarea--white', { 'textarea--with-error': error })}
      placeholder={placeholder}
      disabled={disabled}
      {...rest}
    />
    {error && <p className="input-error">{error}</p>}
  </Label>
);

TextAreaWithLabel.propTypes = {
  labelText: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
};

export default TextAreaWithLabel;
