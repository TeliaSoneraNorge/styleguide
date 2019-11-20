import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*
 * Category: FormElements
 *
 * Standard color is black. Labels used with TextBoxWithLabel, TextAreaWithLabel and DropDownListWithLabel should appear on top of input element and be in grey color.
 */
const Label = ({ text, children, isUsingGrayText, className, ...rest }) => (
  <label
    className={classnames('label', {
      [className]: className,
      'label--gray-text': isUsingGrayText,
    })}
    {...rest}
  >
    {text || children}
  </label>
);
Label.propTypes = {
  /** Content of this label. */
  text: PropTypes.node,
  /** Content of this label. */
  children: PropTypes.node,
  isUsingGrayText: PropTypes.bool,
};

export default Label;
