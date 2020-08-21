import React from 'react';
import classnames from 'classnames';

import Heading from '../Heading';

/**
 * Status: *finished*.
 * Category: Notifications
 *
 * Use this component when you want to make the user aware of something, for instance:
 * - the chat to customer service is closed
 * - unpaid amount on invoice if date is past due date
 *
 * It's recommended to use this component with any heading component and only for short texts (for instance maximum five words).
 */
const AlertText = ({ children, className, ...rest }) => (
  <Heading
    className={classnames('alert-text', {
      [className]: className,
    })}
    level={2}
    text={children}
    {...rest}
  />
);

export default AlertText;
