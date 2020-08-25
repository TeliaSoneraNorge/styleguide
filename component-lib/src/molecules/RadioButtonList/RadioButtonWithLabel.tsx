import React from 'react';

import Label from '../../atoms/Label/Label';

type Props = {
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    value?: any;
    hasRichContent?: boolean;
    onChange?: (...args: any[]) => any;
    children?: React.ReactNode;
};

const RadioButtonWithLabel = ({ label, checked, disabled, name, value, hasRichContent, onChange, children }: Props) => (
  // @ts-expect-error ts-migrate(2322) FIXME: Property 'className' does not exist on type 'Intri... Remove this comment to see the full error message
  <Label className="radio-button-with-label">
    <input
      className="radio-button-with-label__input"
      type="radio"
      name={name}
      checked={checked}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type '((event: Ch... Remove this comment to see the full error message
      onChange={onChange ? onChange : null}
      disabled={disabled}
      value={value}
    />
    <span className="radio-button-with-label__svg-container">
      <svg className="radio-button-with-label__svg" width="20px" height="20px" viewBox="0 0 20 20">
        <circle className="radio-button-with-label__frame" cx="10" cy="10" r="9" />
        <circle className="radio-button-with-label__check-mark" cx="10" cy="10" r="5" />
      </svg>
    </span>
    <span className="radio-button-with-label__label-text">{hasRichContent ? children : label}</span>
  </Label>
);

export default RadioButtonWithLabel;
