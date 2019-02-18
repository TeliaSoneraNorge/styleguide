import React from 'react';
import classnames from 'classnames';

/**
 * Status: *finished*.
 */
const Caption = ({ className, children, ...rest }) => (
    <div
        className={classnames('columnbox', {
            [className]: className
        })}
        {...rest}>
        {children}
    </div>
);

export default Caption;
