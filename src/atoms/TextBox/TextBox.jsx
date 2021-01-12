import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import deprecate from 'util-deprecate';

const TextBox = React.forwardRef(
  deprecate(
    ({ className, type, placeholder, disabled, error, small, ...rest }, ref) => (
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
    ),
    '<TextBox/> from Telia Styleguide is a deprecated component. Use <TextField/> instead'
  )
);

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
