import React from 'react';

import Label from '../../atoms/Label/Label';

type Props = {
    label?: string;
    name?: string;
    value?: any;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (...args: any[]) => any;
    children?: React.ReactNode;
};

const RadioButton = ({ label, name, value, checked, disabled, onChange, children }: Props) => (
  // @ts-expect-error ts-migrate(2322) FIXME: Property 'className' does not exist on type 'Intri... Remove this comment to see the full error message
  <Label className="radiobutton">
    <input
      type="radio"
      name={name}
      checked={checked}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type '((event: Ch... Remove this comment to see the full error message
      onChange={onChange ? onChange : null}
      disabled={disabled}
      value={value}
    />
    <span className="radiobutton__svg-container">
      <svg width="20px" height="20px" viewBox="0 0 20 20">
        <circle className="radiobutton__border" cx="10" cy="10" r="9" />
        <circle className="radiobutton__circle" cx="10" cy="10" r="5" />
      </svg>
    </span>
    <span className="radiobutton__text">{children != null ? children : label}</span>
  </Label>
);

export default RadioButton;
