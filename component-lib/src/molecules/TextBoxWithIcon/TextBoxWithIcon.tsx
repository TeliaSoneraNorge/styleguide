import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SvgIcon from '../../atoms/SvgIcon';
import Spinner from '../../atoms/Spinner';
import TextBox from '../../atoms/TextBox';

const TextBoxIcon = ({
  iconName,
  iconIsButton,
  iconColor,
  iconLabel,
  onClick,
  displayLoader
}: any) => {
  if (!iconName) return null;

  if (iconIsButton) {
    return (
      <React.Fragment>
        {displayLoader && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              top: 0,
              right: 0,
              padding: '4px 10px',
            }}
          >
            <Spinner type="sm" />
          </div>
        )}
        {!displayLoader && (
          <button
            onClick={onClick}
            className="textbox-with-icon__icon-wrapper textbox-with-icon__button button--stripped"
            aria-label={iconLabel}
          >
            <SvgIcon className="textbox-with-icon__icon" iconName={iconName} color={iconColor} />
          </button>
        )}
      </React.Fragment>
    );
  }

  return (
    <span className="textbox-with-icon__icon-wrapper" aria-label={iconLabel}>
      <SvgIcon className="textbox-with-icon__icon" iconName={iconName} color={iconColor} />
    </span>
  );
};

/**
 * Status: *finished*.
 * Category: FormElements
 **/
const TextBoxWithIcon = React.forwardRef(
  (
    {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type '{ chi... Remove this comment to see the full error message
      className,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'type' does not exist on type '{ children... Remove this comment to see the full error message
      type,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'placeholder' does not exist on type '{ c... Remove this comment to see the full error message
      placeholder,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'disabled' does not exist on type '{ chil... Remove this comment to see the full error message
      disabled,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'error' does not exist on type '{ childre... Remove this comment to see the full error message
      error,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'small' does not exist on type '{ childre... Remove this comment to see the full error message
      small,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'iconName' does not exist on type '{ chil... Remove this comment to see the full error message
      iconName,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'iconColor' does not exist on type '{ chi... Remove this comment to see the full error message
      iconColor,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'iconIsButton' does not exist on type '{ ... Remove this comment to see the full error message
      iconIsButton,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'iconLabel' does not exist on type '{ chi... Remove this comment to see the full error message
      iconLabel,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'onIconClick' does not exist on type '{ c... Remove this comment to see the full error message
      onIconClick,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'displayLoader' does not exist on type '{... Remove this comment to see the full error message
      displayLoader,
      ...rest
    },
    ref
  ) => (
    <div
      className={classnames('textbox-with-icon', {
        ['textbox-with-icon--small']: small,
        [className]: className,
      })}
    >
      <TextBox
        ref={ref}
        // @ts-expect-error ts-migrate(2322) FIXME: Property 'type' does not exist on type 'IntrinsicA... Remove this comment to see the full error message
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        small={small}
        {...rest}
      />
      <TextBoxIcon
        iconName={iconName}
        iconIsButton={iconIsButton}
        iconColor={iconColor}
        iconLabel={iconLabel}
        onClick={onIconClick}
        displayLoader={displayLoader}
      />
    </div>
  )
);
TextBoxWithIcon.displayName = 'TextBoxWithIcon';

TextBoxWithIcon.defaultProps = {
  // @ts-expect-error ts-migrate(2322) FIXME: Object literal may only specify known properties, ... Remove this comment to see the full error message
  iconColor: 'black',
  placeholder: '',
  onChange: () => {},
};

TextBoxWithIcon.propTypes = {
  // @ts-expect-error ts-migrate(2322) FIXME: Object literal may only specify known properties, ... Remove this comment to see the full error message
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  small: PropTypes.bool,

  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  iconIsButton: PropTypes.bool,
  iconLabel: PropTypes.string,
  title: PropTypes.string,

  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextBoxWithIcon;
