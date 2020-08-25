import React from 'react';
import classnames from 'classnames';

type Props = {
    text?: React.ReactNode;
    children?: React.ReactNode;
    isUsingGrayText?: boolean;
};

/**
 * Status: *finished*
 * Category: FormElements
 *
 * Standard color is black. Labels used with TextBoxWithLabel, TextAreaWithLabel and DropDownListWithLabel should appear on top of input element and be in grey color.
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type 'Props... Remove this comment to see the full error message
const Label = ({ text, children, isUsingGrayText, className, ...rest }: Props) => (
  <label
    className={classnames('label', {
      [className]: className,
      'label--gray-text': isUsingGrayText,
    })}
    {...rest}
  >
    {text || children}
  </label>
);

export default Label;
