import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *Deprecated*, use TextBoxWithLabel. To hide the label, set hideLabel to hide the label.
 * Category: FormElements
 *
 * Be sure to set the correct type when using this component as it helps the user to give correct input.
 **/
// @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type '{ chi... Remove this comment to see the full error message
const TextBox = React.forwardRef(({ className, type, placeholder, disabled, error, small, ...rest }, ref) => (
  <input
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'unknown' is not assignable to type 'HTMLInpu... Remove this comment to see the full error message
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
  // @ts-expect-error ts-migrate(2322) FIXME: Object literal may only specify known properties, ... Remove this comment to see the full error message
  placeholder: '',
  onChange: () => {},
};

TextBox.propTypes = {
  // @ts-expect-error ts-migrate(2322) FIXME: Object literal may only specify known properties, ... Remove this comment to see the full error message
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextBox;
