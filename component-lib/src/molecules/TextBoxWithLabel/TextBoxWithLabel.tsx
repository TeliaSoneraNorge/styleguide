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
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'labelText' does not exist on type '{ chi... Remove this comment to see the full error message
      labelText,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'type' does not exist on type '{ children... Remove this comment to see the full error message
      type,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'placeholder' does not exist on type '{ c... Remove this comment to see the full error message
      placeholder,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'hideLabel' does not exist on type '{ chi... Remove this comment to see the full error message
      hideLabel,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'errorMessage' does not exist on type '{ ... Remove this comment to see the full error message
      errorMessage,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'disabled' does not exist on type '{ chil... Remove this comment to see the full error message
      disabled,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'withIcon' does not exist on type '{ chil... Remove this comment to see the full error message
      withIcon,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'iconName' does not exist on type '{ chil... Remove this comment to see the full error message
      iconName,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'iconColor' does not exist on type '{ chi... Remove this comment to see the full error message
      iconColor,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'iconIsButton' does not exist on type '{ ... Remove this comment to see the full error message
      iconIsButton,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'iconLabel' does not exist on type '{ chi... Remove this comment to see the full error message
      iconLabel,
      ...rest
    },
    ref
  ) => (
    <Label
      // @ts-expect-error ts-migrate(2322) FIXME: Property 'className' does not exist on type 'Intri... Remove this comment to see the full error message
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
          // @ts-expect-error ts-migrate(2322) FIXME: Property 'type' does not exist on type 'IntrinsicA... Remove this comment to see the full error message
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
          // @ts-expect-error ts-migrate(2322) FIXME: Property 'type' does not exist on type 'IntrinsicA... Remove this comment to see the full error message
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
  // @ts-expect-error ts-migrate(2322) FIXME: Object literal may only specify known properties, ... Remove this comment to see the full error message
  iconColor: 'black',
  placeholder: '',
  onChange: () => {},
};

TextBoxWithLabel.propTypes = {
  // @ts-expect-error ts-migrate(2322) FIXME: Object literal may only specify known properties, ... Remove this comment to see the full error message
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
