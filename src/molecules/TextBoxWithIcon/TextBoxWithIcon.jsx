import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SvgIcon from '../../atoms/SvgIcon';
import Spinner from '../../atoms/Spinner';
import TextBox from '../../atoms/TextBox';

const TextBoxIcon = ({ iconName, iconIsButton, iconColor, iconLabel, onClick, displayLoader }) => {
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
      className,
      type,
      placeholder,
      disabled,
      error,
      small,
      iconName,
      iconColor,
      iconIsButton,
      iconLabel,
      onIconClick,
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
  iconColor: 'black',
  placeholder: '',
  onChange: () => {},
};

TextBoxWithIcon.propTypes = {
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
