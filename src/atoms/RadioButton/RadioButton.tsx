import React from 'react';
import classnames from 'classnames';

import Label from '../Label/Label';

type Props = {
  label?: string;
  /**
   * Should be used if no label is present
   */
  ariaLabel?: string;
  name?: string;
  value?: any;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  children?: React.ReactNode;
  dataTestId?: string;
};

export const RadioButton: React.FC<Props> = (props) => {
  const { label, name, value, checked, disabled, onChange, className, children, ariaLabel, dataTestId } = props;
  return (
    <Label className={classnames('radiobutton', { 'radiobutton--disabled': disabled })}>
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        value={value}
        aria-label={ariaLabel}
        data-testid={dataTestId}
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
};
