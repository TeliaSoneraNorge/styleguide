import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*.
 *
 * Be sure to set the correct type when using this component as it helps the user to give correct input.
**/
const TextBox = React.forwardRef(({ className, type, placeholder, disabled, error, ...rest }, ref) =>
    <input
        ref={ref}
        className={classnames('textbox', {
            [className]: className,
            ['textbox--with-error']: error
        })}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...rest} />
);

TextBox.defaultProps = {
    placeholder: '',
    onChange: () => {}
};

TextBox.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func
};

export default TextBox;