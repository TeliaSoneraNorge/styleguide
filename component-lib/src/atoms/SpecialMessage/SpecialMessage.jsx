import React from 'react';
import classnames from 'classnames';

/**
 * Status: *finished*
 */
const SpecialMessage = ({ children, className, ...rest }) => (
    <strong
        className={classnames('special-message', {
            [className]: className
        })}
        {...rest}>
        {children}
    </strong>
);

export default SpecialMessage;