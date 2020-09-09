import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *Deprecated*, use TextBoxWithLabel. To hide the label, set hideLabel to hide the label.
 * Category: FormElements
 *
 * Be sure to set the correct type when using this component as it helps the user to give correct input.
 **/
const TextBox = React.forwardRef(({ className, type, placeholder, disabled, error, small, ...rest }, ref) => (
  <input
    ref={ref}
    className={classnames('textbox', {
      [className]: className,
      ['textbox--with-error']: error,
      ['textbox--small']: small,
    })}
    type={type}
    placeholder={placeholder}
    disabled={disabled}
    {...rest}
  />
));
TextBox.displayName = 'TextBox';

TextBox.defaultProps = {
  placeholder: '',
  onChange: () => {},
};

TextBox.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextBox;
