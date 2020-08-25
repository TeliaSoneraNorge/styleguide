import React from 'react';
import classnames from 'classnames';

import Label from '../../atoms/Label/Label';

type Props = {
    labelText: string;
    hideLabel?: boolean;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
};

/**
 * Status: *finished*.
 * Category: FormElements
 **/
const TextAreaWithLabel = ({ labelText, hideLabel, placeholder, error, disabled, ...rest }: Props) => (
  // @ts-expect-error ts-migrate(2322) FIXME: Property 'className' does not exist on type 'Intri... Remove this comment to see the full error message
  <Label className="textarea-with-label" isUsingGrayText={true}>
    <span className={classnames('textarea-with-label__label-text', { 'sr-only': hideLabel })}>{labelText}</span>
    <textarea
      className={classnames('textarea', 'textarea--white', { 'textarea--with-error': error })}
      placeholder={placeholder}
      disabled={disabled}
      {...rest}
    />
    {error && <p className="input-error">{error}</p>}
  </Label>
);

export default TextAreaWithLabel;
