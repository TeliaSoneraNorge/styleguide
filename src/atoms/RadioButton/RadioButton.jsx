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
      onChange={onChange ? onChange : null}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      value={value}
    />
    <span className="radiobutton__svg-container">
      <svg width="20px" height="20px" viewBox="0 0 20 20">
        <circle className="radiobutton__border" cx="10" cy="10" r="9" />
        <circle className="radiobutton__circle" cx="10" cy="10" r="5" />
      </svg>
    </span>
    <span className={classnames('radiobutton__text', className ? className : undefined)}>
      {children != null ? children : label}
    </span>
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
