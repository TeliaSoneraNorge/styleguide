import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Label from '../../atoms/Label';
import TextBox from '../../atoms/TextBox';
import TextBoxWithIcon from '../TextBoxWithIcon/TextBoxWithIcon';

/**
 * Status: *in progress*.
 * Category: FormElements
 **/
const TextBoxWithLabel = React.forwardRef(
  (
    {
      labelText,
      type,
      placeholder,
      hideLabel,
      errorMessage,
      disabled,
      withIcon,
      iconName,
      iconColor,
      iconIsButton,
      iconLabel,
      ...rest
    },
    ref
  ) => (
    <Label
      className={classnames('textbox-with-label', {
        'textbox-with-label--with-error': errorMessage,
      })}
      isUsingGrayText={true}
    >
      <span
        className={classnames('textbox-with-label__label-text', {
          'sr-only': hideLabel,
        })}
      >
        {labelText}
      </span>
      {withIcon ? (
        <TextBoxWithIcon
          ref={ref}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          error={!!errorMessage}
          iconName={iconName}
          iconColor={iconColor}
          iconIsButton={iconIsButton}
          iconLabel={iconLabel}
          aria-invalid={!!errorMessage}
          {...rest}
        />
      ) : (
        <TextBox
          ref={ref}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          error={!!errorMessage}
          aria-invalid={!!errorMessage}
          {...rest}
        />
      )}
      {errorMessage && (
        <p role="alert" className="input-error" aria-live="polite">
          {errorMessage}
        </p>
      )}
    </Label>
  )
);
TextBoxWithLabel.displayName = 'TextBoxWithLabel';

TextBoxWithLabel.defaultProps = {
  iconColor: 'black',
  placeholder: '',
  onChange: () => {},
};

TextBoxWithLabel.propTypes = {
  labelText: PropTypes.string,
  hideLabel: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,

  withIcon: PropTypes.bool,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  iconIsButton: PropTypes.bool,
  iconLabel: PropTypes.string,

  onChange: PropTypes.func,
};

export default TextBoxWithLabel;
