import React from 'react';
import classnames from 'classnames';

/**
 * Status: *finished*
 * Category: Style
 */
const SpecialMessage = ({
  children,
  className,
  ...rest
}: any) => (
  <strong
    className={classnames('special-message', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </strong>
);

export default SpecialMessage;
