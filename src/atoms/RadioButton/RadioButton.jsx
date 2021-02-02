import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Label from '../../atoms/Label/Label';

const RadioButton = ({
  label,
  name,
  value,
  checked,
  disabled,
  onChange,
  children,
  onMouseEnter,
  onMouseLeave,
  className,
}) => (
  <Label className="radiobutton">
    <input
      type="radio"
      name={name}
      checked={checked}
      onChange={onChange}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      value={value}
    />
    <span className="radiobutton__svg-container">
      <svg width="44px" height="44px" viewBox="0 0 44 44">
        <circle className="radiobutton__border" cx="22" cy="22" r="12" />
        <circle className="radiobutton__circle" cx="22" cy="22" r="8" />
      </svg>
    </span>
    {children ||
      (label && (
        <span className={classnames('radiobutton__text', className)}>{children != null ? children : label}</span>
      ))}
  </Label>
);
RadioButton.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default RadioButton;
