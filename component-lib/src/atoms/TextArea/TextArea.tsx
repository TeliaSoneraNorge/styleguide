import React from 'react';
import classnames from 'classnames';

type Props = {
    error?: boolean;
};

/**
 * Status: *Deprecated*: Use TextAreaWithLable to be WGAC2.0 compliant. Set 'hideLabel' to hide the lable.
 * Category: FormElements
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'children' does not exist on type 'Props'... Remove this comment to see the full error message
const TextArea = ({ children, className, error, ...rest }: Props) => (
  <textarea
    className={classnames('textarea', {
      [className]: className,
      ['textarea--with-error']: error,
    })}
    {...rest}
  >
    {children}
  </textarea>
);

export default TextArea;
